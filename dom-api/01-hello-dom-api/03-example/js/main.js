console.log(document.head);
console.log(document.body);

let myObj = {
    id: 'C001',
    name: 'Kasun'
};

console.log(myObj);
Object.defineProperty(myObj, "name",
    {configurable: false})
delete myObj.name;
console.log(myObj);

delete document.body;
//document.body.remove();

document.querySelector('h1').remove();
const liFirst = document
    .querySelector('ul > li:first-child');
// liFirst.remove();
liFirst.innerText = 'Hello Kohamada Ithin?';

for(let i = 0; i < 100; i++){
    const p1 = document.createElement('p');
    p1.innerText = 'Hello Mama Ithin Paragarph Ekak..!';
    document.body.prepend(p1);
}

liFirst.style.fontSize = '2rem';
liFirst.style.backgroundColor = 'yellow';
let colors = ['red', 'green', 'yellow', 'orange'];
let i = 0;
setInterval(()=>{
    liFirst.style.backgroundColor = colors[i++];
    if (i === colors.length) i = 0;
}, 500);


