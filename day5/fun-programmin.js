// function main (task){
//     task(10,20);
//     task(1,2,3)
// };

// main(function(a,b){
//     console.log(a+b)
// })
// main(function(a,b,c){
//     console.log(a*b*c)
// };

// arrow function 
//introduced in ES-6 version -2015 (ECMA-Script)
// const hero = (name) => (console.log(name));
// const sub   = (a,b) => console.log(a-b)
// const add = (a,b) => {
//     console.log(a+b)
// }
// hero('superman')
// sub(10,5)
// add(10,5)

// const names=()=> console.log('hello');
// names();

// const cal =(a,b,task) => task(a,b);

// cal(a = prompt('enter a no'),b = prompt('enter a no2'),(a,b)=> console.log(a+b));
// cal(a = prompt('enter a no'),b = prompt('enter a no2'),(a,b)=> console.log(a-b));
// cal(a = prompt('enter a no'),b = prompt('enter a no2'),(a,b)=> console.log(a*b));
 
// DAY 6 
// NESTED FUNCTION
// a function inside another function is called nested function     

// function parnet(){
//     function child (){
//         console.log('child function')
//     }
//     child();
// }
// parnet()

//lexical scope or scope chain
// var a = 10;
// let b = 20;
// function lexical(){
//     var a = 'hello';
//     let b = 'world';
//     console.log(a)
//     console.log(b)
//     console.log(this.a);
//     console.log(this.b)
// }
// lexical()
// lexical scope or scope chain
//--> the ability of js engine to look for a variable in the current scope
//  and if it is not found it will look for it in the outer scope
//  and so on until it reaches the global scope.

// function main(){
//     var a = 10;
//     function child(){
//         var b = 20;
//         console.log(a)
//         console.log(b)
//     }
//     child()
// }
// main();

// CLOSURE  
// A function that has access to the outer function scope even after the outer function has returned.
// the binding of child function to the outer function scope is called closure.
// the binding of child function lexial scope to the outer function scope is called closure.
// function outer(){
    
//     function inner(){
//         console.log("inner")
//     }
//     return inner ;
// }
// outer()();

// ;
// 
// 
// 
// function outer(){
//     var a = 10;
//     function inner(){
//         console.log("inner")
//     }
//     function inner2(){
//         console.log("inner2")
//     }
//     return [inner , inner2];
// }
// outer()[0]()
// outer()[1]()
// ;
// var close = outer();
// close();

// disadvantage of closure  - memory wastage
//if are supposed to call child function multiple times , multiple times closure will be created in heap area 
//and it will consume more memory.
function outer(){
    var a = 10;
    function inner(){
        console.log("inner")
        function inner_1(){
            console.log('inner_1')
        }
        return inner_1;
    }
    function inner2(){
        console.log("inner2")
    }
    return [inner , inner2];
}

outer()[0]()();
outer()[1]();
