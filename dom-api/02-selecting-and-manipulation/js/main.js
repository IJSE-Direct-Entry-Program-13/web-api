const ul1 = document.querySelector("#ul-1");
const ul1Copy = document.getElementById('ul-1');
console.log(ul1 === ul1Copy);
console.log(ul1);
console.log(ul1Copy);

const li2 = document.getElementById('li-2');
const li2Copy = document.querySelector("#li-2");
const li2CopyCopy = document
    .querySelector("#ul-1 > li:nth-child(2)");
console.log(li2 === li2Copy);
console.log(li2 === li2CopyCopy);

const liList = document
    .querySelectorAll("#ul-1 > li");
console.log(liList, Array.isArray(liList));
for(const liElm of liList) console.log(liElm);

const liNew = document.createElement('li');
liNew.innerText = "Append Item";
const liNew2 = document.createElement('li');
liNew2.innerText = "Prepend Item";
ul1.append(liNew);
ul1.prepend(liNew2);

const h1Elm = document.querySelector("h1");
console.log(h1Elm.innerText);
h1Elm.innerText = "DOM API: Selecting & Manipulation";

const liBefore = document.createElement('li');
const liAfter = document.createElement('li');
liBefore.innerText = "Just Before the Second Item";
liAfter.innerText = "Just After the Second Item";
li2.before(liBefore);
li2.after(liAfter);

// const tr1 = document.createElement('tr');
// const td1 = document.createElement('td');
// td1.innerText = 'C004';
// tr1.append(td1);
// const td2 = document.createElement('td');
// td2.innerText = 'Upul';
// tr1.append(td2);
// const td3 = document.createElement('td');
// td3.innerText = 'Moratuwa';
// tr1.append(td3);
// const tbody = document
//     .querySelector("#tbl-customers > tbody");
// tbody.append(tr1);

// const tr1 = document.createElement('tr');
// for(const text of ['C004', 'Upul', 'Moratuwa']){
//     const tdElm = document.createElement('td');
//     tdElm.innerText = text;
//     tr1.append(tdElm);
// }
// const tbody = document
//     .querySelector("#tbl-customers > tbody");
// tbody.append(tr1);
//
// console.log(tr1.innerHTML);
// console.log(tr1.innerText);
// console.log(tr1.outerHTML);

const tr1 = document.createElement('tr');
tr1.innerHTML = `
    <td>C004</td>
    <td>Upul</td>
    <td>Moratuwa</td>
`;
const tbody = document
    .querySelector("#tbl-customers > tbody");
tbody.append(tr1);

const trFirst = tbody
    .querySelector("tr:first-child");
console.log(trFirst.innerText);
// This sanitizes the markup before setting
// trFirst.innerText = `
//     <td>C001</td>
//     <td>Kasun</td>
//     <td>Galle</td>
// `;
trFirst.innerHTML = `
    <td>C001</td>
    <td>Kasun</td>
    <td>Galle</td>
`;

const tr2Clone = tbody
    .querySelector("tr:nth-child(2)")
    .cloneNode(true);
tbody.append(tr2Clone);

document.body.prepend(h1Elm.cloneNode());

const tr2 = document.createElement('tr');
// tbody.querySelector("tr:nth-child(3)")
//     .innerHTML = `
//     <td>C100</td>
//     <td>Supun</td>
//     <td>Kandy</td>
// `;
tr2.innerHTML = `
    <td>C100</td>
    <td>Supun</td>
    <td>Kandy</td>
`;
tbody.querySelector("tr:nth-child(3)")
    .replaceWith(tr2);

const ul2 = document.querySelector("#ul-2");
// ul2.innerText = "";
// ul2.innerHTML = "";
// ul2.replaceChildren();

ul2.innerHTML = `
    <li>New First Item</li>
    <li>New Second Item</li>
    <li>New Third Item</li>
`;

const l1 = document.createElement('li');
l1.innerText = "New First Item";
const l2 = document.createElement('li');
l2.innerText = "New Second Item";
const l3 = document.createElement('li');
l3.innerText = "New Third Item";

// ul2.replaceChildren(
//     '<li>New First Item</li>',
//     '<li>New Second Item</li>',
//     '<li>New Third Item</li>');

ul2.replaceChildren(l1, l2, l3);

ul2.querySelector("li:nth-child(2)").remove();
tbody.querySelector("tr:nth-child(2)").remove();

