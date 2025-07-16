import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid"; // Importing uuid for unique ids
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {

  const [notes, setNotes] = useState([]);

  function addNote(createNote) {
    const noteWithId = { ...createNote, id: uuidv4() }; //Adding with uuid
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
