const h1 = document.createElement('h1');
h1.textContent = "Allo world" ;
document.body.append(h1);

const div = document.createElement("div");
document.body.append(div);
div.style.border = '5px solid black'

const ul = document.createElement("ul");
div.append(ul)

const li1 = document.createElement('li');
console.log(li1)
li1.innerText= 'kimi ga boku ni misethe kuretha '
ul.append(li1)


const table = document.createElement("table");
div.append(table)
table.setAttribute("border" , "2px solid")
const tr= document.createElement('tr');
const td = document.createElement('td');
td.innerText ="sno";
tr.append(td)
table.append(tr)
