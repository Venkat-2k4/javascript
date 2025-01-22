//console.log(hello()) //funcexp.js:1 Uncaught ReferenceError: Cannot access 'hello' before initialization
// const hello = function() {
//     console.log("Hello World");
// }
// console.log(hello); // [Function: hellow]
// const num1  = prompt("Enter first number");
// const num2 = prompt("Enter second number");
// const num3 = prompt("Enter third number");

// const hero = (num1,num2,num)=>{
//     if(num1>num2 && num1>num3){
//         console.log("num1 is greater");
// }else if(num2>num1 && num2>num3){
//     console.log("num2 is greater"+num2); }
// else{
//     console.log("num3 is greater" + num3);}

// }
// hero(num1,num2,num3);
let b = function(a){
    console.log(a);
    console.log(arguments);
    console.log(arguments[0]);
    console.log(arguments[1]);
    console.log(arguments[2]);
    console.log(arguments[3]);
}

b(10,20,30,40,50,60,70,80,90,100); 




// function programming
//higher order function and callback function 
//its used to perform generic task(multiple task)
//it can be created using function decleration statement  or function expression or arrow function 


//HIGHER ORDER FUNCTION
// A function which accepts another function as an argument or returns another function is called higher order function

//CALLBACK FUNCTION
// A function which is passed as an argument to another higher order function is called callback function
function main(a,){
    console.log(a());
    
}
main (function(){
    return "Hello";
})
