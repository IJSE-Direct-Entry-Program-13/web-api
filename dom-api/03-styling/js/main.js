const h1 = document.querySelector("h1");
console.log(h1.className);
h1.className = "success success-bg";

h1.classList.remove('success-bg');
h1.classList.add('danger-bg');

const pElm = document.querySelector("p");
pElm.classList.add('danger-text', 'success-bg');

console.log(h1.classList.contains('success-bg'));
console.log(h1.classList.contains('danger-bg'));

function toggleFn() {
    document.querySelector("h2")
        .classList.toggle('danger-text');
}

setInterval(toggleFn, 500);

h1.style.fontSize = '2.5rem';
h1.style.backgroundColor = 'lightblue';
console.log("Color: ", h1.style.color);
console.log("Font Size: ", h1.style.fontSize);
console.log("Background Color: ", pElm.style.backgroundColor);
console.log("Color: ", pElm.style.color);

console.log("==================");

var x = 10;
console.log(globalThis.x, window.x, this.x,  x);
console.log(getComputedStyle(h1).color);
console.log(getComputedStyle(pElm).padding);
console.log(pElm.style.padding);
// window.location.href = 'http://google.lk';

console.log(window.document);
