// async function test(data) { // async demek bu fonksiyonun muhakkak promise döndüreceğini belirtir.

//     // data yı alıp bir promise gönderiyor
//     // return new Promise((resolve, reject)=>{
//     //     resolve(data);

//     // });

//     // return data;

//     let promise = new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve("bu bir değerdir.");
//         }, 5000);
//     });

//     let response = await promise;

//     return response;


// }

// test("hello").then(response => console.log(response));


// async function testData(data) {

//     let promise = new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if (typeof data === "string") {
//                 resolve(data);

//             }else{
//                 reject(new Error("lütfen string bir değer girin."));
//             }
//         },5000);
//     });

//     const response=await promise;
// return response;


// }
// testData(2).then(data=> console.log(data))
// .catch(error=>console.log(error));

async function getCurrency(url) {

    const response =await fetch(url);

    const data =await response.json();

    return data;

    
}
getCurrency("https://api.exchangeratesapi.io/latest")
.then(zozan=> console.log(zozan));