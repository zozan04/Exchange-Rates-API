function Employee(name,age,salary){
    this.name=name;
    this.age=age;
    this.salary=salary;

}
Employee.prototype.showInfos=function(){ // prototype ile showInfos adında bir metot tanımlanıyor.
    //prototype sayesinde bu metot tüm employee nesneleri tarafından ortak olarak kullanılabilir(tek bellek ile)
    //burdada this metodu çağıran objeyi işaret ediyor
    console.log("İsim : "+ this.name + " Yaş: "+this.age+" Maaş: "+this.salary);

}
const emp=new Employee("Zozan",26,78950);
console.log(emp);
emp.showInfos();
// class Employee{  //employee burda bir şablon. nesneleri oluşturmak için kullanılır
//     constructor(name,age,salary){ //
//         this.name=name;// çalışanın adı objenin name özelliğine atanır.
//         this.age=age;  // this, oluşturulan yeni employee nesnesidir.
//         this.salary=salary;  // parametredeki değeri nesneye kaydediyoruz.
//     }
//     showInfos(){  // nesneye ait bir fonksiyon.
//         console.log("isim :" + this.name + " yaş :" + this.age + " maaş :" + this.salary); // objeden isim yaş ve maaş alıyoruz ve yazdırıyoruz.

//     }
// }

// // yukarıdaki kod tek başına bir tarif gibi.tek başına çalışmaz bu yüzden ekranda bir şey göremeyiz.
// //kullanmak için bu tariften bir nesne üretmeliyiz.
// //new employee sınıfının constructorunu çalıştırır
// const emp=new Employee("zozan",26,5000); // new ile employee sınıfından yeni bir obje üretiyoruz.
// //console.log(emp);
// emp.showInfos();  // this, emp objesini işaret ediyor.

