import React, { useEffect } from "react";
import { useNotesStore } from "./NotesContext";

export const NewNoteForm = () => {
  const [noteText, setNotesText] = React.useState("");
  const notesStore = useNotesStore();

  useEffect(() => {
    console.log(notesStore);
  }, [notesStore]);
  return (
    <>
      <input
        value={noteText}
        onChange={(e) => setNotesText(e.target.value)}
        type="text"
      />
      <button onClick={() => notesStore.addNotes(noteText)}>Add note</button>
    </>
  );
};
