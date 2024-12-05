import Button from "../Common/Button"

const NoteNotSelected = ({onAddNote}) => {
  return (
    <div className="mt-24 text-center w-2/3">
      <h2 className="text-xl font-bold text-stone-500 my-4">Note not selected</h2>
      <p className="text-stone-400">Select a note or get started with a new one</p>
      <p className="mt-4">
        <Button onClick={onAddNote}>Create New project</Button>
      </p>
    </div>
  )
}

export default NoteNotSelected