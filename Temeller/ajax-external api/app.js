document.getElementById("change").addEventListener("click",change);

function change(){
    const xhr=new XMLHttpRequest();

    xhr.open("GET","https://v6.exchangerate-api.com/v6/63403257d4da07e2ab4fefad/latest/USD");

    xhr.onload=function(){
        if(this.status){
            const response=JSON.parse(this.responseText); 
            //console.log(this.responseText);

            const rate=response.conversion_rates.TRY
            const amount=Number(document.getElementById("amount").value);

            document.getElementById("tl").value=amount*rate;

        }
    }
    
    xhr.send();



}