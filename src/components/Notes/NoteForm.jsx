import React from "react";
import Button from "../Common/Button";
import Input from "../Common/Input";

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

    await Promise.resolve();
    localStorage.setItem(note.id, JSON.stringify(noteData));
    onEdit({ ...note, ...noteData });
    setIsEditing(false);
  };

  return (
    <section>
      {isEditing ? (
        <form onSubmit={(event) => saveNote(event)}>
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
          <div className="flex gap-2">
            <Button type="submit">Save Note</Button>
            <Button
              type="button"
              onClick={() => {
                setIsEditing(false);
                onNoteEditCancel();
              }}
            >
              Cancel
            </Button>
          </div>
        </form>
      ) : (
        <>
          <p className="text-stone-800 mb-4 whitespace-pre-wrap">
            {note ? (
              note.description
            ) : (
              <>Type your notes by clicking "Edit Note"</>
            )}
          </p>
          <Button onClick={() => setIsEditing(true)}>Edit Note</Button>
          <Button onClick={onNoteExit}>Cancel Note</Button>
        </>
      )}
    </section>
  );
};

export default NoteForm;
