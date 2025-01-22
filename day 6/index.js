//day 6 
//IIFE - Immediately Invoked Function Expression
// it will be immediately once function object is defined
//syntax : (function(){})() 

// (()=>{console.log()} )();

((a,b)=>{
    console.log(a+b);
})(10,20);

(function demo(){
    console.log("demo");
})();


// arrays in the javascript
//arrays are collection of elements
// used to store multiple data types in a single variable
let arr = [10 ,'hello',true,20.5 , 1n ,undefined ,null ];
console.log(arr);

let arrr = new Array(10,20,30,40) ;
console.log(arrr);

// objects in javascript 
// objects are collection of key value pairs
let obj = {
    name:"ROG",
    price:80000,
    cpu :'r7',
    ram:16,
    ssd:true,
    specifications:{
        cpu:'r7',
        ram:16,
        ssd:true,
        gpu : 'rtx 3050'
    },
    games:['csgo','rivals','valorant']

}
console.log(obj);


// constructor function for creating   objects
function Laptop(name,price,cpu,ram,ssd){
    this.name = name;
    this.price = price;
    this.cpu = cpu;
    this.ram = ram;
    this.ssd = ssd;
}
let p1 = new Laptop('ROG',80000,'r7',16,true);
console.log(p1);
console.log(p1.name);
console.log(p1.price);
console.log(p1.cpu);
console.log(p1.ram);
