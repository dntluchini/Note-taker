


const inputDisplayNote = document.getElementById ('noteInput');

const list = document.getElementById ('noteList')

const btnDeleteNote = document.querySelector('.deleteNote');

const btnAddNote = document.querySelector('.add');


let inputDate = () =>{
        const actualDate = new Date();
        const options = {day : 'numeric' , month : 'numeric' , year : 'numeric'};
        return   actualDate.toLocaleDateString(undefined,options);
     }




const saveData = (note) =>{
        const dateNote = {
            date : inputDate(),
            note : inputDisplayNote.value
        }
        const notesSorted = localStorage.getItem('notes');
        const notes = notesSorted ? JSON.parse(notesSorted) : []
        notes.push(dateNote);
        localStorage.setItem('notes',JSON.stringify(notes));
    }
 
    

const createNote = (note) =>{
        const li = document.createElement ('li');
        const date = document.createElement ('p');
        date.classList.add ('date');
        date.innerHTML = note.date;
        li.addEventListener('click',function(e) {
            if (e.target.tagName === 'LI') {
                e.target.classList.toggle ('checked');
            }
        })
        li.innerHTML = `${note.note} ${date.outerHTML}`
        return li;
}    

const addNote = () =>{
     if (inputDisplayNote.value === '') {
        alert ('Fill the note!!');
     } else {
        saveData (inputDisplayNote.value);
        const dateNote = createNote({
            date : inputDate(),
            note : inputDisplayNote.value
        })
        list.appendChild(dateNote);
        inputDisplayNote.value = '';  
     }
}






btnAddNote.addEventListener('click',addNote);

