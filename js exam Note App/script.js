document.addEventListener('DOMContentLoaded', function() 
{
    const input = document.getElementById("input");
    const btn = document.getElementById("btn");
    const noteContainer = document.querySelector(".note_container");
    
    const notesDisplay = document.createElement("div");
    notesDisplay.className = "notes-display";
    noteContainer.appendChild(notesDisplay);
    
    function addNote() 
    {
        const noteText = input.value;
        if (noteText) 
        {
            createNoteElement(noteText);
            input.value = " ";
            saveNotes();
        }
    }
    
    function createNoteElement(text) 
    {
        const noteElement = document.createElement("div");
        noteElement.className = "note";
        
        const noteContent = document.createElement("p");
        noteContent.textContent = text;
        
        const deleteBtn = document.createElement("button");
        deleteBtn.className = "delete-btn";
        deleteBtn.textContent = "Delete";
        
        
        noteElement.appendChild(noteContent);
        noteElement.appendChild(deleteBtn);
        notesDisplay.appendChild(noteElement);
        
        deleteBtn.addEventListener("click", function() 
        {
            noteElement.remove();
            saveNotes();
        });
    }
 
    btn.addEventListener("click", addNote);
    
    function saveNotes() 
    {
        const notes = [];
        document.querySelectorAll(".note p").forEach(note => 
        {
            notes.push(note.textContent);
        });
        localStorage.setItem("notes", JSON.stringify(notes));
    }
    
    function loadNotes() 
    {
        const savedNotes = JSON.parse(localStorage.getItem("notes"));
        savedNotes.forEach(noteText => {
            createNoteElement(noteText);
        });
    }
    
    loadNotes();
}); 