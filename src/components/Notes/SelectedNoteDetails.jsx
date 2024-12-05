import NoteForm from "./NoteForm"

const SelectedNoteDetails = ({note, onDelete, onEdit}) => {

  return (
    <div className="w=[35]rem mt-16">
      <header className="pb-4 mb-4 border-b-2 border-stone-300">
        <div className="flex items-center justify-between">
          <h1 className="text-3xl font-bold text-stone-600 mb-2">{note.title}</h1>
          <button className="text-stone-600 hover:text-stone-950" onClick={onDelete}>Delete</button>
        </div>
      </header>
      <NoteForm note={note} onEdit={onEdit} />
    </div>
  )
}

export default SelectedNoteDetails