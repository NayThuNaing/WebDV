//about of Constructor
var str="Hello";
// console.log(typeof str);
var ob=new String("hello");//Object

//type of constrctor (Literal and normal)
//literal object
const book={
    title:"About of Literal COnstructor",
    year:"2022",
    getTitle : function (){
        return `This title is represent of literal ${this.title}`;
    },
};
console.log(book);
console.log(book.getTitle());
console.log(Object.values(book));


// constructor
function LaptopDetail(Name,Price,Description){
    this.Name=Name;
    this.Price=Price;
    this.Description=Description;
    this.getLaptop=function() {
        return `This is name of Laptop ${this.Name}`;
    };

}
var Laptop= new LaptopDetail("Vivobook14", "$600","Good qulity and avaliable now.")
console.log(Laptop);
console.log(Laptop.getLaptop());

function Magazin(name,date,producer)
{
    this.name=name;
    this.date=date;
    this.producer=producer;
    this.getdescription= function(){
        return `${this.name} is produced by ${this.producer} in ${this.date}`;
    };
  
}

Magazin.getYear=function(){
    const year=new Date().getFullYear- this.date;
    return `this maganize is ${year} ago.`
};
var content=new Magazin("Overthinking","2000","Nay Thu Naing");
console.log(content.getdescription());


console.log(Magazin.getYear());