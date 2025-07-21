import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid"; // Importing uuid for unique ids
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {

  const [notes, setNotes] = useState([]);

  // Fetching notes from the backend when the component mounts
  // useEffect(() => {
  //   fetch('http://localhost:3000/notes')
  //   .then(res => res.json())
  //   .then(data => setNotes(data))
  //   .catch(error => console.error('Error fetching notes:' , error));
  // }, []); 

  function addNote(createNote) {
    const noteWithId = { ...createNote, id: uuidv4() };
    // fetch('http://localhost:3000/notes', {
    //   method: 'POST',
    //   headers: { "Content-Type": "application/json"},
    //   body: JSON.stringify(noteWithId)
    // }).then(() => setNotes(prevNotes => [...prevNotes, noteWithId]));
    
    //Adding with uuid
    setNotes((prevValue) => [
      ...prevValue,
      noteWithId
    ]);
    // Alternative way to add without id
    //   setNotes((prevValue) => {
  //     return [
  //       ...prevValue,
  //       createNote
  //     ]
  //  });
   // console.log(createNote);
  }

  function deleteNote(id) {
    // fetch(`http://localhost:3000/notes/${id}`, { method: 'DELETE' })
    // .then(() => setNotes(prevNotes => prevNotes.filter(note => note.id !== id)));

    setNotes((prevValue) => {
      return prevValue.filter((noteItem) => {
        return noteItem.id !== id; //Using id to filter out the note
      });
      // Alternative way to filter by index
      // return prevValue.filter((noteItem, index) => {
      //   return index !== id;
      // });
    });
  }

  function editNote(id, updateNote) {
    // fetch(`http://localhost:3000/notes/${id}`, {
    //   method: 'PUT',
    //   headers: { "Content-Type": "application/json" },
    //   body: JSON.stringify(updateNote)
    // }).then(() => setNotes(prevNotes => 
    //   prevNotes.map(note => note.id === id ? { ...note, ...updateNote } : note)));

    setNotes((prevNotes) => {
      prevNotes.map((note) => {
        if(note.id === id) {
          return { ...note, ...updateNote };
        } else {
          return note;
        }
      })
    })
  }

  return (
    <div>
      <Header />
      <CreateArea 
      handleAdd={addNote}
      />
      {notes.map((noteItem) => {
       return (
        <Note
        key={noteItem.id} // Using id as key
        id={noteItem.id} // Passing id to Note component
        // Alternative way to use index as key (not recommended)
        // key={index}
        // id={index} 
        title={noteItem.title}
        content={noteItem.content}
        onDelete={deleteNote}
        onEdit={editNote}
        />
       )
      })}
      <Footer />
    </div>
  );
}

export default App;
