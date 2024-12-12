import React, { useRef, useState } from "react";
import Input from "../Common/Input";
import Button from "../Common/Button";
import NoteNotSelected from "./NoteNotSelected";

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
          <form onSubmit={(event) => saveNote(event)}>
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
            <div className="flex gap-2">
              <Button type="submit">Save Note</Button>
              <Button
                type="button"
                onClick={() => {
                  cancelNote(), setIsEditing(false);
                }}
              >
                Cancel
              </Button>
            </div>
          </form>
        </div>
      ) : (
        <NoteNotSelected
          onAddNote={() => {
            addNote(), setIsEditing(!isEditing);
          }}
        />
      )}
    </>
  );
};

export default NewNote;
