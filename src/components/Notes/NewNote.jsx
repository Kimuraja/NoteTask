import React, { useRef } from "react";
import Input from "../Common/Input";

const NewNote = ({ handleAddNote, onCancelNote }) => {
  const titleRef = useRef()

  const saveNote = () => {
    const enteredTitle = titleRef.current.value

    if ( enteredTitle.trim() === '') {
      return alert('No data provided in note !')
    }

    handleAddNote({
      title: enteredTitle,
    })
  }

  return (
    <div className="w-[35rem] mt-16">
      <menu className="flex items-center justify-end gap-4 my-4">
        <li>
          <button className="text-stone-800 hover:text-stone-950" onClick={onCancelNote}>
            Cancel
          </button>
        </li>

        <li>
          <button className="bg-stone-800 text-stone-50 hover:bg-stone-950 px-6 py-2 rounded-md" onClick={saveNote}>
            Save
          </button>
        </li>
      </menu>
      <div>
        <Input ref={titleRef} label="Title" type="text" required/>
      </div>
    </div>
  );
};

export default NewNote;
