// const obj = {
//     name  : " gt 6t",
//     ram:"8 gb",
//     storage :"256 gb"
// }
// console.log(obj);
// const obj1 = JSON.stringify(obj);
// console.log(obj1);
// const obj2 = JSON.parse(obj1);
// console.log(obj2)

// 3 ways to fetch api 

// fetch();
// AJAX
//Axios

window.fetch("data.json")
.then((data)=> data.json() )
.then((res)=>{
    console.log(res)
    res.map((item)=>{
        document.body.innerHTML += `<h1>${item.name}</h1>`
    })
})