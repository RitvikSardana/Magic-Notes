//variables
let addBtn = document.querySelector("#addBtn");
let addTxt = document.querySelector("#addTxt");
let notesElement = document.querySelector("#notes");
showNotes();
//event listeners
//If users adds a note, add it to local storage
addBtn.addEventListener("click",putData);


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
        html += `<div class="card mx-2 my-2" style="width: 18rem">
        <div class="card-body">
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

