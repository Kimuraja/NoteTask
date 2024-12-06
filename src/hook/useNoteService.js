import { useState } from "react"

let id = 0

const useNoteService = () => {
  const [noteState, setNoteState] = useState({
    selectedNoteId: undefined,
    notes: []
  })

  const selectedNote = noteState.notes.find(note => note.id === noteState.selectedNoteId)

  const addNote = () => {
    setNoteState(prevState => {
      return {
        ...prevState,
        selectedNoteId: null
      }
    })
  }

  const deleteNote = () => {
    setNoteState(prevState => {
      return {
        ...prevState,
        selectedNoteId: undefined,
        notes: prevState.notes.filter((note)=> note.id !== prevState.selectedNoteId)
      }
    })
  }

  const selectNote = (id) => {
    setNoteState(prevState => {
      return {
        ...prevState,
        selectedNoteId: id
      }
    })
  }

  const cancelNote = () => {
    setNoteState(prevState => {
      return {
        ...prevState,
        selectedNoteId: undefined,
      }
    })
  }
  
  const editNote = (updatedNote) => {
    setNoteState((prevState) => ({
      ...prevState,
      notes: prevState.notes.map((note) =>
        note.id === updatedNote.id ? updatedNote : note 
      ),
    }));
  };
  
  const handleAddNote = (noteData) => {
    setNoteState(prevState => {
      const newNote = {
        ...noteData,
        id: id++
      }

      return {
        ...prevState,
        selectedNoteId: undefined,
        notes: [...prevState.notes, newNote]
      }
    })
  }
  
  return { noteState, addNote, deleteNote, selectNote, cancelNote, handleAddNote, selectedNote, editNote }
}

export default useNoteService