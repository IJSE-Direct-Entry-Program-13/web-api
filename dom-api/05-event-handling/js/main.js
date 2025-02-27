const btnClickMe = document
    .querySelector('#btn-click-me');

function btnClickMeOnClick1(e){
    e.stopImmediatePropagation();
    console.log("Click1...!");
}

function btnClickMeOnClick2(e){
    console.log("Click2...!");
}

function btnClickMeOnClick3(e){
    console.log("Click3...!");
}

btnClickMe.addEventListener('click', btnClickMeOnClick2);
btnClickMe.addEventListener('click', btnClickMeOnClick1);
btnClickMe.addEventListener('click', btnClickMeOnClick3);

const btnWrapper = document
    .querySelector("#button-wrapper");
const mainDiv = document.querySelector("#main-div");

// btnWrapper.addEventListener('click', (e)=>{
//     console.log("Wrapper eka uda click kara...!");
// });

mainDiv.addEventListener('click', (e)=>{
    console.log("Menna magea udath click karanawa...!");
});