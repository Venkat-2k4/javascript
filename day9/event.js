// const loging =()=>{
//     console.log("u clickEd meeeeeee")
// }
// let btn = document.getElementsByClassName("btn");

// btn[0].onclick = function(){
//     let clr = Math.round(Math.random()*100000).toString(16);
//     console.log(clr)
//     document.body.style.backgroundColor=(`#${clr}`)
// }

// const btn2 = document.querySelector(".empt");
// let color = window.prompt("enter a color");
// btn2.innerHTML = color
// btn2.onmouseover = ()=>{
//     document.body.style.backgroundColor= `${color}`;
//     document.body.style.transition = "ease all 3s"
// }

let btn = document.querySelector("#demo2");
console.log(btn)
btn.addEventListener('click',()=>{
    let text = document.querySelector("#demo1").value;
    console.log(text)
    let speech = new SpeechSynthesisUtterance
    speech.text = text;
    speechSynthesis.speak(speech)

})