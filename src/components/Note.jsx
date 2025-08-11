import React, { useState } from "react";
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import SaveIcon from '@mui/icons-material/Save';

function Note(props) {

  const [isEditing, setIsEditing] = useState(false);
  const [updatedNote, setUpdatedNote] = useState({
    title: props.title,
    content: props.content
  });

  function handleClick() {
    props.onDelete(props.id);
  }

  function handleEdit() {
    setIsEditing(true);
  }

  function handleSaveClick() {
    props.onEdit(props.id, updatedNote);
    setIsEditing(false);
  }

  function handleChange(event) {
    const { name, value } = event.target;
    setUpdatedNote((prevValue) => {
      return {
        ...prevValue,
        [name]: value
      }
    })
  }

   function handleFocus(e) {
      e.target.style.backgroundColor = "lightyellow";
    }

    function handleBlur(e) {
      e.target.style.backgroundColor = "";
    }

  return (
    <div className="note">
      {isEditing ? (
        <>
          <input name="title" onChange={handleChange} placeholder="title" value={updatedNote.title} onFocus={handleFocus} onBlur={handleBlur}/>
          <textarea name="content" onChange={handleChange} placeholder="content" value={updatedNote.content} />
          <button type="button" onClick={handleSaveClick}><SaveIcon /></button>
        </>
      ) : (
        <>
          <h1>{props.title}</h1>
          <p>{props.content}</p>
          <button type="button" onClick={handleClick}><DeleteIcon /></button>
          <button type="button" onClick={handleEdit}><EditIcon /></button>
        </>
      )}
    </div>
  );
}

export default Note;
