// function getData(data){ //promise objesi döndüren fonksiyon
//     return new Promise(function(resolve,reject){
//         setTimeout(function(){

//             if(typeof data==="string"){
//                 resolve(data);
//             }
//             else{
//                 reject(new Error("lütfen string bir değer girin"));
//             }

//         },5000);
//     });

// }

// getData(24)
// .then(response => console.log("gelen değer" + response))
// .catch(err => console.error(err));


function addTwo(number){
    return new Promise((resolve, reject ) =>{
        setTimeout(function(){
          if(typeof number==="number"){
              resolve(number+2);
          }
          else{
            reject(new Error("lütfen bir sayı girin"));
          }
        },3000);
    });
}

addTwo("merhaba")
.then(response =>{
    console.log(response);
    return response+2;

}).then(response2 =>console.log(response2))
.catch(err=> console.error(err));