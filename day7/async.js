// asynchronous function
// a way of executing other functions to execute first 
 // two methods 
 // 1) setTimeout(callbackfunction , delay)
//  2)setInterval(callbackfunction ,delay)
//these methods are present inside a window object
// window.setTimeout(()=>{
//     console.log("im set time out and i print after  5 secs delay" )
// },5000)



// window.setInterval(()=>{
//     console.log("im set interval and i log after every 3 secs");
    
// } ,2000)

// function main(n,m){
//     setTimeout(()=>{
//         for(let i=n ; i<=m ;i++){
//             console.log(i)
//         }
//     },2000)
// } 
// main(1,10)

// function demo(){
//     console.log("demo");

// }
// demo()


// promise 
//it is an object 
// it is used to look after async function

// 3 phases
// 1) pending phase
//2) resolve or fullfil 
//3) reject phase

// syntax
// new promise ((resolve,reject)=>{
   //    --async-function-code }).then(()=>{}).catch(()=>{})
    // let online  = window.navigator.onLine
    // new Promise((resolve,reject)=>{
    //     setTimeout(()=>{
    //         if(online === true){
    //             return resolve()
    //         }else{
    //             return reject() 
    //         }
    //     },2000)
    // }).then(()=>console.log("online😘😘😘")).catch(()=>console.log("offline😘😘😘"))

function main (n,m){
    new Promise((resolve,reject)=>{
        setTimeout(()=>{
            if(isNaN(n)|| isNaN(m)){
                return reject()
            }
            for(let i =n ; i<m ;i++){
                console.log(i);
                
            }
            return resolve()
        },3000)
    }).then(()=>{console.log("promise is resolved")})
    .catch(()=>{console.log("promise is rejected")})
}    
main(1,10)
function snumber(){
    console.log("numbers are printing after 3 secs")
}
snumber()


 //promise chaining
 // can use multiple .then() methods
 //

