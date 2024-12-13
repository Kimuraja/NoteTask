import React, { useEffect } from "react";
import Button from "../Common/Button";

const Sidebar = ({
  onAddNote,
  notes,
  onSelectNote,
  selectedNote,
  getNotes,
}) => {

  useEffect(() => {
    getNotes();
  }, [getNotes]);

  return (
    <aside className="w-1/3 px-8 py-16 bg-stone-900 text-stone-50 md:w-72 rounded-r-xl">
      <h2 className="mb-8 font-bold uppercase md:text-xl text-stone-200">
        Your Notes
      </h2>
      <div>
        <Button onClick={onAddNote}>+ New Note</Button>
      </div>
      <ul className="mt-8">
        {notes.map((note) => {
          const cssClass =
            note.id === selectedNote?.id
              ? `w-full text-left py-1 px-2 rounded-sm my-1 text-stone-200 bg-stone-800`
              : `w-full text-left py-1 px-2 rounded-sm my-1 hover:text-stone-200 hover:bg-stone-800`;
          return (
            <li key={note.id}>
              <button
                className={cssClass}
                onClick={() => onSelectNote(note.id)}
              >
                {note.title}
              </button>
            </li>
          );
        })}
      </ul>
    </aside>
  );
};

export default Sidebar;
