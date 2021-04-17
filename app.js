//variables
let addBtn = document.querySelector("#addBtn");
let addTxt = document.querySelector("#addTxt");


//event listeners
//If users adds a note, add it to local storage
addBtn.addEventListener("click",putData);


//functions

function putData(e){
    let notes = localStorage.getItem("notes");

}