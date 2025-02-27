const btnSave = document.querySelector('#btn-save');
const txtId = document.querySelector("#txt-id");
const txtName = document.querySelector("#txt-name");
const tblCustomers = document
    .querySelector("#tbl-customers");
const form = document.querySelector("#frm");

form.addEventListener('submit', (e) => {
    // e.preventDefault();
    const id = txtId.value.trim();
    const name = txtName.value.trim();

    if (existsId(id)){
        alert("Id already exists");
        txtId.select();
        txtId.focus();
        return;
    }

    const newRow = document.createElement('tr');
    newRow.classList.add('align-middle');
    newRow.innerHTML = `
        <td class="text-center">${id}</td>
        <td>${name}</td>
        <td class="text-center">
            <i class="bi bi-trash fs-4"></i>
        </td>`;
    tblCustomers.querySelector("tbody").prepend(newRow);
    document.querySelector("#btn-clear").click();
    txtId.focus();

    tblCustomers.querySelector("tfoot")
        .classList.add('d-none');
});

function existsId(id) {
    const tdList = tblCustomers
        .querySelectorAll("tbody tr > td:first-child");
    for (const td of tdList) {
        if (td.innerText === id) return true;
    }
    return false;
}

tblCustomers.querySelector("tbody")
.addEventListener('click', (e)=>{
    if (e.target && e.target.classList.contains('bi-trash')){
        e.target.parentElement.closest("tr").remove();

        if (!tblCustomers.querySelector("tbody > tr")){
            tblCustomers.querySelector("tfoot")
                .classList.remove("d-none");
        }
    }
});

const chkMode = document.querySelector('#chk-mode');
chkMode.addEventListener('change', ()=>{
   if (chkMode.checked){
       // Dark mode
       document.querySelector("html")
           .setAttribute("data-bs-theme", "dark");
   }else{
       // Light mode
       document.querySelector("html")
           .setAttribute("data-bs-theme", "light");
   }
});

// const btnClear = document.querySelector("#btn-clear");
//
// const h1Elm = document.querySelector("h1");
// h1Elm.addEventListener('click', ()=>{
//    alert("OKAY1");
// });
// h1Elm.onclick = ()=>{
//   alert("Okay");
// };

// btnClear.addEventListener('click', ()=>{
//    alert("Okay1");
// });
// const fn = ()=>{
//     alert("Okay2");
// }
// btnClear.addEventListener('click', fn);
// btnClear.removeEventListener('click', fn);