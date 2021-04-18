//variables
let addBtn = document.querySelector("#addBtn");
let addTxt = document.querySelector("#addTxt");
let notesElement = document.querySelector("#notes");
let searchTxt = document.querySelector("#searchTxt");
let noteCards = document.querySelector(".noteCards");

showNotes();
//event listeners
//If users adds a note, add it to local storage
addBtn.addEventListener("click",putData);
searchTxt.addEventListener("input",search)


//functions

function putData(e){
    let notes = localStorage.getItem("notes");
    if(notes ==null) {
        notesObj = [];
    }
    else{
        notesObj = JSON.parse(notes);
    }
    notesObj.push(addTxt.value);
    localStorage.setItem("notes",JSON.stringify(notesObj));
    addTxt.value="";
    showNotes();
}

//function to show elements from local storage
function showNotes(){
    let notes = localStorage.getItem("notes");
    if(notes ==null) {
        notesObj = [];
    }
    else{
        notesObj = JSON.parse(notes);
    }
    let html = '';

    notesObj.forEach(function(element,index) {
        html += `<div class="card mx-2 my-2" style="width: 18rem;  padding: 1.2rem; ">
        <div class="note">
            <h5 class="card-title">Note ${index+1}</h5>
            <p class="card-text">
            ${element}
            </p>
            <button class="btn btn-primary" id="${index}
            " onClick = "deleteNote(this.id)">Delete Note
            </button>
        </div>
       </div>   
        `
    });
        // let notesElement = document.querySelector("#notes");
        if(notesElement.length != 0){
            notesElement.innerHTML = html;
        }
        if(localStorage.length ==0){
            notesElement.innerHTML = `No notes available, Add some notes by clicking on "Add a note button" above`
        }
}


// Function to delete a note
function deleteNote(index) {
    console.log("Deleting note ",index);


    let notes = localStorage.getItem("notes");
    if(notes ==null) {
        notesObj = [];
    }
    else{
        notesObj = JSON.parse(notes);
    }

    notesObj.splice(index,1);
    localStorage.setItem("notes",JSON.stringify(notesObj));
    showNotes();
}

function search() {
    let inputVal = searchTxt.value.toLowerCase();
    let t = noteCards.getElementsByClassName("card"); // to get class of the note element
    let allNotes = noteCards.getElementsByClassName("card-text");
    // console.log("triggered ",inputVal);
    for(i=0;i<allNotes.length;i++){
        let cardTxt = allNotes[i].innerText;
        let t = noteCards.getElementsByClassName("card")
        if(cardTxt.includes(inputVal)){
            t[i].style.display = "block";
        }
        else{
            t[i].style.display = "none"
        }
    }
}