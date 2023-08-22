let inputNote = document.getElementById ('noteInput');

const btnAdd = document.querySelector('.add');

const list = document.getElementById ('noteList');



function getFormattedCurrentDate() {
    const currentDate = new Date();
    const day = currentDate.getDate();
    const month = currentDate.getMonth() + 1; 
    const year = currentDate.getFullYear();
    const formattedDate = `${day}/${month}/${year}`;

    return formattedDate;
}


const updateLocalStorage = () =>{
    localStorage.setItem ('note',noteC.innerHTML)

}
const noteC = document.querySelector('.note');



noteC.addEventListener ('click',function(e){
    if (e.target === 'BUTTON') {
        e.target.parentElement.remove();
        updateLocalStorage();
    } 

}) 




const addNotes = () => {
    const dateContent = getFormattedCurrentDate();

    const deleteNote = document.createElement('button');
    deleteNote.textContent = 'Delete!';
    deleteNote.classList.add('deleteNote');
    deleteNote.addEventListener('click', () => {
        newNote.remove();
    });

    const newNote = document.createElement('li');
    newNote.classList.add('note');
    newNote.setAttribute('id', 'text');

    const noteContent = document.createElement('div');
    noteContent.textContent = noteInput.value;
    noteContent.classList.add('note-content'); 

    const date = document.createElement('p');
    date.textContent = dateContent;

    newNote.appendChild(noteContent);
    newNote.appendChild(date);
    newNote.appendChild(deleteNote);

    list.appendChild(newNote);
    updateLocalStorage();

    noteInput.value = '';
}


btnAdd.addEventListener('click',() =>{
    if (noteInput.value === '') {
        alert ('Fill the note!') ;
    } else {
        addNotes ();
        noteInput.value = '';
    }
});

