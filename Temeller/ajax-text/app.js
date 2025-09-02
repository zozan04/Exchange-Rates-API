document.getElementById("btn").addEventListener("click",function(){
    const xhr=new XMLHttpRequest();  //Bu nesne arka planda (asenkron olarak) bir sunucuya istek (request) atmak ve cevabı almak için kullanılır.
                                    //Yani sayfa yenilenmeden veri çekmek/sunucuya göndermek için kullanılır (AJAX mantığı).

    xhr.onprogress=function(){ //onprogress, Veri yüklenirken çalışan olaydır."yükleniyor" mesajı anlamında
        console.log("process işleniyor");


    }
    xhr.onload=function(){  //Bu olay, istek tamamen bittiğinde (yani sunucudan cevap geldiğinde) çalışır.
        if(this.status===200){  //HTTP durum kodunu gösterir. 200 ise başarılı demektir.
            console.log(this.responseText);
        }
    }

    xhr.open("GET", "example.txt", true); // 1. parametre: method. GET: sunucundan veri çekmek için. POST: sunucuya veri göndermek için
    // , 2. parametre: URL, 3. parametre: asenkron mu?
    xhr.send(); // isteği gönder


});