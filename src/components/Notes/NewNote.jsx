import React, { useRef, useState } from "react";
import Input from "../Common/Input";
import NoteNotSelected from "./NoteNotSelected";
import NoteForm from "../Common/NoteForm";


const NewNote = ({ handleAddNote, addNote, cancelNote }) => {
  const titleRef = useRef();
  const descriptionRef = useRef();
  const [isEditing, setIsEditing] = useState(true);

  const saveNote = (event) => {
    event.preventDefault();

    handleAddNote({
      title: titleRef.current.value,
      description: descriptionRef.current.value,
    });
  };

  return (
    <>
      {isEditing ? (
        <div className="w-[35rem] mt-16">
          <NoteForm save={saveNote} onClick={() => {cancelNote(), setIsEditing(false)}}>
            <Input
              ref={titleRef}
              label="Title"
              value={titleRef.current}
              maxLength="20"
              required
            />
            <Input
              ref={descriptionRef}
              label="Description"
              value={titleRef.current}
              textarea
              required
            />
          </NoteForm>
        </div>
      ) : (
        <NoteNotSelected
          onAddNote={() => { addNote(), setIsEditing(!isEditing) }}
        />
      )}
    </>
  );
};

export default NewNote;
