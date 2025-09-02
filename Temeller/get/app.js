class Request{

    constructor(){
        this.xhr=new XMLHttpRequest();
    }
    //Get Request
    get(url,callback){
        this.xhr.open("GET",url); //bağlantıyı açıyoruz.
        

        this.xhr.onload=() =>{  //başarılı olması durumunda çalışacak fonksiyon
         

            if(this.xhr.status===200){
                callback(this.xhr.responseText);
            }
        }//.bind(this);  //xhr fonksiyonun içindeki this’i dışarıdaki this (yani Request sınıfı) ile sabitler.

        this.xhr.send(); //veriyi gönderiyoruz
    }



post(url,data,callback){
    this.xhr.open("POST",url);
    this.xhr.setRequestHeader("content-type","application/json");

    this.xhr.onload=()=>{
        if(this.xhr.status===201){
            //başarılı
            callback(null,this.xhr.responseText);
        }
        else{
            callback("herhangi bir hata oluştu");
        }
    }
    this.xhr.send(JSON.stringify(data));

}


put(url,data,callback){
    this.xhr.open("PUT",url);
    this.xhr.setRequestHeader("content-type","application/json");

    this.xhr.onload=()=>{
        if(this.xhr.status===200){
            //başarılı
            callback(null,this.xhr.responseText);
        }
        else{
            callback("herhangi bir hata oluştu");
        }
    }
    this.xhr.send(JSON.stringify(data));

}

delete(url,callback){
        this.xhr.open("DELETE",url); //bağlantıyı açıyoruz.
        

        this.xhr.onload=() =>{  //başarılı olması durumunda çalışacak fonksiyon
         

            if(this.xhr.status===200){
                callback(null,"veri silme başarılı");
            }
            else{
                callback("Delete Request: bir hata oluştu",null);
            }
        }//.bind(this);  //xhr fonksiyonun içindeki this’i dışarıdaki this (yani Request sınıfı) ile sabitler.

        this.xhr.send(); //veriyi gönderiyoruz
    }

}
const request=new Request();

// request.post("https://jsonplaceholder.typicode.com/albums",{userId:2,title:"thriller"},function(err,album){
//    if(err===null){
//     console.log(album);
//    }
//    else{
//     console.log(err);
//    }
// })

// request.put("https://jsonplaceholder.typicode.com/albums/10",{userId:143,title:"krall"},function(err,album){
//    if(err===null){
//     console.log(album);
//    }
//    else{
//     console.log(err);
//    }
// })

request.delete("https://jsonplaceholder.typicode.com/albums/1",function(err,response){ //function(response){...} → işte bu fonksiyon callback. Ama bu fonksiyon hemen çalışmıyor.

//Ancak şu satır sayesinde, cevap geldiğinde çalışıyor: callback(this.xhr.responseText);
if(err===null){
    console.log(response);
}
else{
    console.log(err);
}
    
});

// request.get("https://jsonplaceholder.typicode.com/albums",function(response){ //function(response){...} → işte bu fonksiyon callback. Ama bu fonksiyon hemen çalışmıyor.

// //Ancak şu satır sayesinde, cevap geldiğinde çalışıyor: callback(this.xhr.responseText);

//     console.log(response);
// });