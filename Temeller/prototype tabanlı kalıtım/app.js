function Person(name,age){
    this.name=name;
    this.age=age;

}

Person.prototype.showInfos=function(){
    console.log("isim :" + this.name + "yaş :" + this.age);
}
//const person=new Person("zozan",26);
//console.log(person);
function Employee(name,age,salary){
    // this.name=name;
    // this.age=age;
    Person.call(this,name,age);
    this.salary=salary;
}
Employee.prototype=Object.create(Person.prototype);//perdon fonksiyonundakileri employee adında oluşturduğumuz yeni fonksiyonda kullanabiliyoruz.
Employee.prototype.toString=function(){
console.log("Employee");
}
const emp=new Employee("zozan ",26,4200);
emp.showInfos();
emp.toString();
console.log(emp);