import { renderHook } from "@testing-library/react";
import { act } from "react";
import useNoteService from "../hook/useNoteService";
import { expect, describe, it } from "vitest";

let result;

beforeEach(() => {
  const hook = renderHook(() => useNoteService());
  result = hook.result;
});

describe("useNoteService", () => {
  it("Should update note when editNote is called", () => {
    const note = { id: 0, title: "Test Note", description: "abc" };

    act(() => {
      result.current.handleAddNote(note);
    });

    const updatedNote = {
      id: 0,
      title: "Updated Note",
      description: "Updated description",
    };

    act(() => {
      result.current.editNote(updatedNote);
    });

    expect(result.current.noteState.notes).toHaveLength(1);
    expect(result.current.noteState.notes[0]).toStrictEqual(updatedNote);
  });

  it("Should switch selectedNoteId to null when addNote is called", () => {
    act(() => {
      result.current.addNote();
    });

    expect(result.current.noteState.selectedNoteId).toBeNull();
  });

  it("Should return empty noteState if deleteNote is called", () => {
    const newNote = { id: 1, title: "Test Note", description: "abc" };

    act(() => {
      result.current.handleAddNote(newNote);
      result.current.selectNote(newNote.id);
      result.current.deleteNote();
    });

    expect(result.current.noteState.notes).toHaveLength(0);
  });

  it("Should add new note when handleAddNote is called", () => {
    const newNote = {
      title: "New Note",
      description: "Description of new note",
    };

    act(() => {
      result.current.handleAddNote(newNote);
    });

    expect(result.current.noteState.notes).toHaveLength(1);
    expect(result.current.noteState.notes[0]).toMatchObject({
      title: "New Note",
      description: "Description of new note",
    });
    expect(result.current.noteState.notes[0].id).toBeDefined();
  });

  it("Should set id for selectedNoteId when selectNote is called", () => {
    const note = { id: 1, title: "Test Note", description: "abc" };

    act(() => {
      result.current.handleAddNote(note);
      result.current.selectNote(note.id);
    });

    expect(result.current.noteState.selectedNoteId).toBe(note.id);
  });

  it("Should set selectedNoteId to undefined when cancelNote is called", () => {
    const note = { id: 1, title: "Test Note", description: "abc" };

    act(() => {
      result.current.handleAddNote(note);
      result.current.selectNote(note.id);
      result.current.cancelNote();
    });

    expect(result.current.noteState.selectedNoteId).toBeUndefined();
  });
});
