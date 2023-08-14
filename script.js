

const btnAddNote = document.querySelector('.add');

const inputDisplayNote = document.getElementById ('noteInput');

const list = document.getElementById ('noteList')

const btnDelete = document.querySelector('.deleteNote');


let inputDate = () =>{
        const actualDate = new Date();
        const options = {day : 'numeric' , month : 'numeric' , year : 'numeric'};
        return   actualDate.toLocaleDateString(undefined,options);
     }

const actualDateNote = inputDate();


const saveDateNoteToLs   = (note) => {
        const dateAndNote = {
        date: inputDate(),
        note: inputDisplayNote.value
  }
  const storedEntries = localStorage.getItem('entries');
  const entries = storedEntries ? JSON.parse(storedEntries) : [];
  entries.push(dateAndNote);
  localStorage.setItem('entries', JSON.stringify(entries));
}


    

const createNoteElement = (note) =>{
    const li = document.createElement('li');
    const dateElement = document.createElement('p');
    dateElement.classList.add('date');
    dateElement.textContent = note.date;
    li.addEventListener('click',() =>{
        li.classList.toggle ('checked');
})
    li.innerHTML = `${note.note} ${dateElement.outerHTML}`;
    
  
      
    return li;

} 


const loadNotes = () =>{
        const notesStored = localStorage.getItem('entries');
        if (notesStored) {
                const entries = JSON.parse(notesStored);
               entries.forEach(entry => {
                const li = document.createElement('li');
                
                const dateElement = document.createElement('p');
                dateElement.classList.add('date');
                dateElement.textContent = entry.date;
                li.innerHTML = `${entry.note} ${dateElement.outerHTML}`;
                li.addEventListener('click',() =>{
                        li.classList.toggle ('checked');
                })
                list.appendChild(li);
               });
        }
}

document.addEventListener('DOMContentLoaded',(loadNotes));

    
const addNote = () =>{
        if (inputDisplayNote.value === '') {
                alert('You need to fill the note!');
            } else {
                saveDateNoteToLs (inputDisplayNote.value);
                 const dateAndNote = createNoteElement({
                        date: inputDate(),
                        note: inputDisplayNote.value
                  });
                  list.appendChild(dateAndNote);
                  inputDisplayNote.value = ''
                };
             }

btnAddNote.addEventListener('click', (addNote)); 
    


btnDelete.addEventListener('click', () => {
        deleteNote(list);
    });
    
    const deleteNote = (ul) => {
        const checkedItems = ul.querySelectorAll('.checked');
        checkedItems.forEach(li => {
            ul.removeChild(li);
        });
    };
    