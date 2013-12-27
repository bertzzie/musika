Musika
======

Musika adalah sebuah perangkat lunak untuk memainkan musik yang sangat sederhana.
Tujuan utama pengembangan perangkat lunak ini adalah sebagai sumber daya pendukung
dalam pengajaran Javascript. Karena itu, fitur Musika sangat sederhana dan terdapat
banyak bagian kode yang perlu diperbaiki. Bagian-bagian dari kode yang perlu 
diperbaiki ini akan menjadi bagian dari latihan yang diberikan kepada peserta kelas
pengajaran.

Meskipun dikembangkan menggunakan teknologi web (HTML, CSS, Javascript), Musika
merupakan sebuah aplikasi desktop. Pilihan untuk mengembangkan Musika sebagai aplikasi
desktop diambil dengan mempertimbangkan bahwa fokus dari pengajaran adalah pemrograman
*client side*. Tidak melibatkan server sama sekali dalam pengajaran pemrograman 
*client side* diharapkan akan sangat membantu peserta pembelajaran.

> ***Catatan 1***: Untuk sekarang, kelas dan bahan pengajaran sedang dalam pengembangan.
> begitu kelas dan bahan selesai dikembangkan, maka file ini juga akan diperbaharui
> untuk memberikan *link* ke kelas tersebut.
>
> ***Catatan 2***: Dikarenakan masalah paten, Musika hanya dapat menjalankan file OGG,
> Matroska, dan Wav saja. Jika ingin memodifikasi Musika untuk dapat membaca file MP3
> juga, silahkan ikuti panduan di [dokumentasi node-webkit](https://github.com/rogerwang/node-webkit/wiki/Support-mp3-and-h264-in-video-and-audio-tag).

Kompilasi Musika
----------------

Sebelum mulai melakukan kompilasi, terlebih dahulu kita harus menginstalasi beberapa 
perangkat lunak berikut:

* [NodeJS](http://nodejs.org/). NodeJS mayoritas digunakan untuk mengakomodasi Build Tools.
* [Ruby](https://www.ruby-lang.org/en/). Ruby digunakan untuk kompilasi SASS.
* [SASS](http://sass-lang.com/). Digunakan sebagai bahasa untuk membuat *stylesheet*.

Instalasi NodeJS dan Ruby cukup mudah, hanya dengan *download* dan install seperti perangkat lunak
pada umumnya. Untuk SASS, silahkan [baca panduan instalasi SASS](http://bertzzie.com/post/27/instalasi-dan-pengunaan-sass) 
jika tidak mengerti caranya.

Selesai melakukan instalasi terhadap perangkat lunak dasar, ambil kode Musika dan masuk
ke direktori penyimpanan kode pada komputer anda dengan menggunakan *command line*.
Jalankan perintah berikut untuk melakukan instalasi modul tambahan NodeJS untuk Musika
secara otomatis:

    npm install
    
Setelah perintah selesai dieksekusi, jalankan perintah berikut untuk kompilasi Musika:

    grunt
    
Hasil kompilasi dapat dibuka di direktori `builds/releases`.

Kompilasi otomatis dapat dijalankan dengan perintah berikut:

    grunt watch
    
Menjalankan perintah di atas akan membuat Musika melakukan kompilasi secara otomatis setiap
ada file yang berubah.

Kompilasi Untuk Mac dan Linux
-----------------------------

Secara standar, kompilasi hanya akan menghasilkan perangkat lunak untuk Windows. Jika ingin 
menghasilkan perangkat lunak untuk Linux dan Mac juga, ganti konfigurasi pada `Gruntfile.js`
di bagian `nodewebkit`. Jika tidak mengerti cara mengubahnya, baca 
[panduan cara penggunaan GruntJS](http://bertzzie.com/post/44/aplikasi-desktop-dengan-html-css-dan-javascript).

Tantangan
---------

Karena dirancang sebagai contoh untuk pembelajaran, Musika memiliki sangat banyak kekurangan.
Kekurangan ini dapat anda coba perbaiki sebagai latihan dan tantangan. Adapun beberapa hal yang dapat
dikembangkan lebih lagi yaitu:

* Penambahan fitur navigasi daftar musik (playlist) dengan menggunakan keyboard.
* Penambahan fitur penghapusan file dari daftar musik.
* *Refactoring* kode, dengan mengaplikasikan *design pattern* MVC.
* Integrasi [AMD (Asynchronous Module Definition)](http://requirejs.org/) untuk meningkatkan modularitas kode.

dan masih banyak tantangan lain lagi. Daftar tantangan ini akan terus ditambahkan seiring dengan
berjalannya waktu.