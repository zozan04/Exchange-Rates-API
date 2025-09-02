// class Book{
//     constructor(title,author,year){
//         this.title=title;
//         this.author=author;
//         this.year=year;
//     }
//     getSummary(){
//         console.log(" Kitap : "+ this.title + " Yazar : " + this.author + " Yıl : " + this.year);

//     }
    
// }
// const book=new Book("Göçebe", "stephenie meyer", 1245);

// console.log(book);
// book.getSummary();

class car{
    constructor(brand,model,year){
        this.brand=brand;
        this.model=model;
        this.year=year;
    }
    getAge(){
        console.log("marka: "+this.brand + " Model :"+this.model+ " Yıl :"+this.year);

    }
}
const cars=new car("Honda","CRV-47",1857);
console.log(cars);
cars.getAge();