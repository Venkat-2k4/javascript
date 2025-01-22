

// while loop 
// it will run until the condition is true
// syntax: while (condition) { code block }
let i = 0;
while (i <= 5) {
    console.log(i);
    i++;
}
//output: 0 1 2 3 4 5
// do while loop
// it will run at least once and then check the condition
// by default it will run once 
// syntax: do { code block } while (condition);
let j = 5;
do {
    console.log(j);
    j--;
} while (j >= 5);

//for loop
// syntax: for (initialization; condition; increment/decrement) { code block }
for (let i = 0; i <= 5; i++) {
    console.log(i);
}


//functions in javascript
// functions are first class citizens in javascript
//functions are objects in javascript
//types of functions
//1. function declaration statement - named function -pure function
//2. function Expression
//3.function programming 
// a. higer order function
// b. callback function
//4. . arrow function

//5. IIFE - immediately invoked function expression

//1. function declaration statement
// its a set of instructions or block of code that performs a specific task 
//syntax: function functionName(parameters) { code block }
//function call functionName(arguments)

// return - keyword used to return the value from the function
// it will stop th execution of the function


// hoisting - process of moving the function declaration to the top of the code
// so that we can call the function before declaring it

//DAY 4
//assigning a function as a value to a variable
// hoisting is not possible for function expression
add();
const add =  function () {               //function expression
    console.log("add function");
}
console.log(add); // [Function: add]


//function decalaration
//hoisting is possible for function declaration
add();
function add() {
    console.log("add function");
}   

