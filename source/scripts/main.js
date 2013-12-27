/*jslint browser:true */

(function () {
    "use strict";
    
    Function.prototype.method = function (name, func) {
        if (!this.prototype[name]) {
            this.prototype[name] = func;
            return this;
        }
    };
    
    Element.method('addClass', function (name) {
        this.classList.add(name);
    });
    
    Element.method('removeClass', function (name) {
        this.classList.remove(name);
    });
    
    Element.method('hasClass', function (name) {
        return this.classList.contains(name);
    });
    
    var tracklist = function (spec) {
        var el = document.getElementById(spec.id),
            tracks = [],
            doubleclickHandler = function (trackId) {
                return function () {
                    var player = document.getElementById(spec.playerId),
                        currentMusic;
                    
                    tracks.forEach(function (t) {
                        if (t.element.hasClass("nowplaying")) {
                            t.element.removeClass("nowplaying");
                        }
                        
                        if (t.id === trackId) {
                            currentMusic = t.path;
                            t.element.addClass("nowplaying");
                        }
                    });
                    
                    player.setAttribute("src", currentMusic);
                    player.play();
                };
            },
            that = {};
        
        that.addTrack = function (file) {
            var newTrack = {
                id: tracks.length + 1,
                element: document.createElement("li"),
                name: file.name,
                path: file.path
            },
                i,
                len = tracks.length;
            
            // check if files already added.
            for (i = 0; i < len; i += 1) {
                if (tracks[i].path === newTrack.path) {
                    return;
                }
            }
            
            newTrack.element.textContent = newTrack.name;
            newTrack.element.setAttribute("id", "track-" + newTrack.id);
            newTrack.element.addEventListener("dblclick", doubleclickHandler(newTrack.id), false);
            el.appendChild(newTrack.element);
            
            tracks.push(newTrack);
        };
        
        return that;
    },
        playlist = function (spec) {
            var el = document.getElementById(spec.id),
                tracks = tracklist({id: spec.trackId, playerId: spec.playerId}),
                removeDefaultText = function () {
                    var length = el.childNodes.length,
                        children = el.childNodes,
                        removedChild = [],
                        i;
                    
                    for (i = 0; i < length; i += 1) {
                        if (children[i].nodeName === "#text" &&
                                children[i].textContent.trim() === "Drop your music here.") {
                            removedChild.push(children[i]);
                        }
                    }
                    
                    removedChild.forEach(function (child) {
                        el.removeChild(child);
                    });
                },
                dropHandler = function (evt) {
                    var files = evt.dataTransfer.files,
                        length = evt.dataTransfer.files.length,
                        i;
                    
                    evt.stopPropagation();
                    evt.preventDefault();
                    
                    removeDefaultText();
                    el.addClass(spec.filledClass);
                    
                    for (i = 0; i < length; i += 1) {
                        tracks.addTrack(files[i]);
                    }
                    
                    el.removeClass(spec.overClass);
                },
                dragOverHandler = function (evt) {
                    evt.stopPropagation();
                    evt.preventDefault();
                    evt.dataTransfer.dropEffect = "copy";
                },
                dragEnterHandler = function () {
                    el.addClass(spec.overClass);
                },
                dragLeaveHandler = function () {
                    el.removeClass(spec.overClass);
                },
                that = {};
            
            // that only have initation method for now, but we'll 
            // add more functionality later. 
            // E.g.: tracking current music.
            that.init = function () {
                el.addEventListener("dragover", dragOverHandler, false);
                el.addEventListener("dragenter", dragEnterHandler, false);
                el.addEventListener("dragleave", dragLeaveHandler, false);
                el.addEventListener("drop", dropHandler, false);
            };
            
            return that;
        };
    
    document.addEventListener("DOMContentLoaded", function () {
        var pl = playlist({
            id          : "playlist",
            trackId     : "tracks",
            playerId    : "player",
            filledClass : "filled",
            overClass   : "over"
        });
        
        pl.init();
        
    }, false);
}());