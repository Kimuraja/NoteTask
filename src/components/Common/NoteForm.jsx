import React from "react";
import Button from "./Button";

const NoteForm = ({children, save, onClick}) => {
  
  return (
    <div className="w-[35rem] mt-16">
      <form onSubmit={save}>
        {children}
        <div className="flex gap-2">
          <Button type="submit">Save Note</Button>
          <Button type="button" onClick={onClick}>
            Cancel
          </Button>
        </div>
      </form>
    </div>
  );
};

export default NoteForm;
