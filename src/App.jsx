import NewNote from "./components/Notes/NewNote";
import NoteNotSelected from "./components/Notes/NoteNotSelected";
import SelectedNoteDetails from "./components/Notes/SelectedNoteDetails";
import Sidebar from "./components/Sidebar/Sidebar";
import useNoteService from "./hook/useNoteService";

function App() {
  const {noteState, addNote, deleteNote, selectNote, cancelNote, handleAddNote, selectedNote, editNote} = useNoteService()

  let content = <SelectedNoteDetails note={selectedNote} onDelete={deleteNote} onEdit={editNote} />

  if (noteState.selectedNoteId === null) {
    content = <NewNote handleAddNote={handleAddNote} onCancelNote={cancelNote}/>
  } else if (noteState.selectedNoteId === undefined) {
    content = <NoteNotSelected onAddNote={addNote}/>
  } 

  return (
    <main className="h-screen my-8 flex gap-8">
      <Sidebar onAddNote={addNote} notes={noteState.notes} onSelectNote={selectNote} />
      {content}
    </main>
  );
}

export default App;
