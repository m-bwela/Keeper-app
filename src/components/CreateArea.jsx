import React, { useState } from "react";
import AddIcon from '@mui/icons-material/Add';
import Fab from "@mui/material/Fab";
import { Zoom } from "@mui/material";

function CreateArea(props) {

  const [isNavigated, setIsNavigated] = useState(false);

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

function expand() {
  setIsNavigated(true);
}

  return (
    <div>
      <form className="create-note">
       {isNavigated ? ( <input name="title" onChange={handleChange} placeholder="Title"  value={createNote.title}/> ): null} 
        <textarea onClick={expand} name="content" onChange={handleChange} placeholder="Take a note..." rows={isNavigated ? 3 : 1} value={createNote.content}/>
        <Zoom in={isNavigated}>
          <Fab onClick={handleClick}>
          <AddIcon />
        </Fab>
        </Zoom>
        
      </form>
    </div>
  );
}

export default CreateArea;
