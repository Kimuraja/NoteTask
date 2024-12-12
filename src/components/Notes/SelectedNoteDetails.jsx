import React, { useState, useEffect } from "react";
import NoteForm from "./NoteForm";

const SelectedNoteDetails = ({
  note,
  onDelete,
  onEdit,
  onSelectNote,
  onCancel,
}) => {
  const [isEditing, setIsEditing] = useState(false);
  const [tempTitle, setTempTitle] = useState(note?.title || "");
  const [tempDescription, setTempDescription] = useState(
    note?.description || ""
  );

  useEffect(() => {
    setTempTitle(note?.title || "");
    setTempDescription(note?.description || "");
  }, [note]);

  const noteEdit = () => {
    onEdit({ ...note, title: tempTitle, description: tempDescription });
    setIsEditing(true);
  };

  const noteEditCancel = () => {
    setTempTitle(note?.title || "");
    setTempDescription(note?.description || "");
    setIsEditing(false);
  };

  return (
    <div className="w=[35]rem mt-16 ">
      <header className="pb-4 mb-4 border-b-2 border-stone-300">
        <div className="flex items-center justify-between">
          <h1 className="text-3xl font-bold text-stone-600 mb-2 mr-6">
            {note.title}
          </h1>
          <button
            className="text-stone-600 hover:text-stone-950"
            onClick={onDelete}
          >
            Delete
          </button>
        </div>
      </header>

      <NoteForm
        note={note}
        isEditing={isEditing}
        setIsEditing={setIsEditing}
        onSetTitle={setTempTitle}
        onSetDescription={setTempDescription}
        title={tempTitle}
        description={tempDescription}
        onEdit={noteEdit}
        onSelectNote={onSelectNote}
        onNoteEditCancel={noteEditCancel}
        onNoteExit={onCancel}
      />
    </div>
  );
};

export default SelectedNoteDetails;
