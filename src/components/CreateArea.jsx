import React, { useState } from "react";

function CreateArea(props) {

const [createNote, setCreateNote] = useState({
  title: "",
  content: ""
});

function handleChange(event) {
  const { name, value } = event.target;
  setCreateNote((prevValue) => {
    return {
      ...prevValue,
      [name]: value,
    }
  })
}

function handleClick(event) {
  props.handleAdd(createNote);
  setCreateNote({
    title: "",
    content: ""
  })
  event.preventDefault();
}

  return (
    <div>
      <form onSubmit={handleClick}>
        <input name="title" onChange={handleChange} placeholder="Title"  value={createNote.title}/>
        <textarea name="content" onChange={handleChange} placeholder="Take a note..." rows="3" value={createNote.content}/>
        <button>Add</button>
      </form>
    </div>
  );
}

export default CreateArea;
