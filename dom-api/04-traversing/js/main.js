const btn = document.querySelector('#btn');
// btn.remove();

btn.previousElementSibling.style.fontSize = '1.5rem';
btn.nextElementSibling.nextElementSibling
    .style.backgroundColor = 'yellow';

btn.parentElement.parentElement.firstElementChild
    .style.color = 'red';

btn.parentElement.parentElement.lastElementChild
    .style.color = 'blue';

btn.parentElement.children.item(3)
.style.color = 'white';

btn.parentElement.children[3]
    .style.backgroundColor = 'black';

btn.closest("body").firstElementChild
.style = "color: blue; background-color: yellow;";

btn.closest("body")
    .querySelector("ul ol > li:last-child")
    .style.backgroundColor = 'yellow';

// btn.parentElement.parentElement.parentElement
//     .style.border = '1px solid black';

btn.parentElement.closest("li")
    .parentElement.closest("li")
.style.border = '1px solid black';