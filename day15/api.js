const select  = document.querySelector("#select");
    console.log(select)
const demo1 = document.querySelector("#demo1")

const demo = async()=>{
    let data = await window.fetch("country.json");
    console.log(data);
    let res = await data.json();
    console.log(res)

    res.map((country)=>{
        console.log(country.country)

        
        select.innerHTML += `<option value =${country.country}>${country.country    } </option>` 
        
        demo1.innerHTML += `<option value =${country.country}>${country.country} </option>`
    })
}
demo();