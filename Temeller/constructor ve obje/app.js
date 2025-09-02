//console.log(this); //global scope

// const emp1={
//     name:"zozan",
//     age:"26",
//     showInfos:function()  {console.log("bilgiler gösterildi.");}  //fonksiyon eklendi.
// };
// const emp2={
//     name:"zarmina",
//     age:"4.000.000.000"
// }

// emp1.salary=40000;
// emp1.showInfos();

// console.log(emp1);
// console.log(emp2);

function employee(name,age,salary){
    this.name=name;
    this.age=age;
    this.salary=salary;

    this.showInfos=function(){
        console.log(this.name,this.age,this.salary);
    }
}
const emp1=new employee("zozan",26,100000);
const emp2=new employee("zarmina",4000000000,1);

// console.log(emp1);
// console.log(emp2);

emp1.showInfos();
emp2.showInfos();