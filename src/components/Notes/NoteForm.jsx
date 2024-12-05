import React, { useState } from "react";
import Button from "../Common/Button";
import Input from "../Common/Input";

const NoteForm = ({ note, onEdit }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [description, setDescription] = useState(note?.description || "");
  const [title, setTitle] = useState(note?.title || "");

  const startEditing = () => setIsEditing(true);
  const cancelEditing = (event) => {
    event.preventDefault();
    setDescription(note?.description || "");
    setTitle(note?.description || "")
    setIsEditing(false); 
  };

  const saveNote = (event) => {
    event.preventDefault();
    if (description.trim() === "" || title.trim() === "") {
      return alert("Description cannot be empty!");
    }
    onEdit({ ...note, description, title }); 
    setIsEditing(false);
  };

  return (
    <section>
      {isEditing ? (
        <form onSubmit={(event)=> saveNote(event)}>
          <Input onChange={(event) => setTitle(event.target.value)}
            label="Title"
            textarea
            required/>
          <Input
            onChange={(event) => setDescription(event.target.value)}
            label="Description"
            textarea
            required
          />
          <div className="flex gap-2">
            <Button type="submit">Save Note</Button>
            <Button type="button" onClick={cancelEditing}>Cancel</Button>
          </div>
        </form>
      ) : (
        <>
          <p className="text-stone-800 mb-4 whitespace-pre-wrap">
            {note.description || <>Type your notes by clicking "Edit Note"</>}
          </p>
          <Button onClick={startEditing}>Edit Note</Button>
        </>
      )}
    </section>
  );
};

export default NoteForm;
