import React from "react";
import Button from "../Common/Button";
import Input from "../Common/Input";
import Note from "../Common/Note";

const NoteForm = ({
  note,
  onEdit,
  isEditing,
  onNoteExit,
  onNoteEditCancel,
  setIsEditing,
  onSetTitle,
  onSetDescription,
  title,
  description,
}) => {

  const saveNote = async (event) => {
    event.preventDefault();
  
    const noteData = { title: title, description: description };
  
    const simulateApiResponse = () => 
      new Promise((resolve) => setTimeout(() => resolve(noteData), 500));
  
    const response = await simulateApiResponse();
    
    localStorage.setItem(note.id, JSON.stringify(response));
    onEdit({ ...note, ...response });
    setIsEditing(false);
  };
  

  return (
    <section>
      {isEditing ? (
        <Note save={saveNote} onClick={() => {onNoteEditCancel(), setIsEditing(false)}} >
          <Input
            onChange={(event) => onSetTitle(event.target.value)}
            label="Title"
            maxLength="20"
            value={title}
            required
          />
          <Input
            onChange={(event) => onSetDescription(event.target.value)}
            label="Description"
            value={description}
            textarea
            required
          />
        </Note>
      ) : (
        <>
          <p className="text-stone-800 mb-4 whitespace-pre-wrap">
            {note ? note.description : <>Type your notes by clicking "Edit Note"</> }
          </p>
          <Button onClick={() => setIsEditing(true)}>Edit Note</Button>
          <Button onClick={onNoteExit}>Cancel Note</Button>
        </>
      )}
    </section>
  );
};

export default NoteForm;