/*jslint sloppy:true */
/*global module */

module.exports = function (grunt) {
    grunt.initConfig({
        sass: {
            dist: {
                options: {
                    sourcemap: true,
                    style: "compressed"
                },
                files: [{
                    expand: true,
                    cwd: './source/styles',
                    src: ['*.scss'],
                    dest: './source/css/',
                    ext: '.css'
                }]
            }
        },
        
        uglify: {
            compile: {
                options: {
                    /*
                      Still bugged. See:
                      https://github.com/gruntjs/grunt-contrib-uglify/pull/122
                    */
                    sourceMap: 'source/js/scripts.min.js.map'
                },
                files: {
                    'source/js/scripts.min.js': ['source/scripts/main.js']
                }
            }
        },
        
        nodewebkit: {
            options: {
                build_dir: './builds',
                mac: false,
                win: true,
                linux32: false,
                linux64: false
            },
            src: ['./source/**/*']
        },
        
        watch: {
            files: ['Gruntfile.js', './source/**/*'],
            tasks: ['sass', 'uglify:compile', 'nodewebkit']
        }
    });
    
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-node-webkit-builder');
    
    grunt.registerTask('default', ['sass', 'uglify:compile', 'nodewebkit']);
};