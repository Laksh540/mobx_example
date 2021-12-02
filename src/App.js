import logo from "./logo.svg";
import "./App.css";
import { NewNoteForm } from "./NewNoteForm";
import { useNotesStore } from "./NotesContext";
import { observer } from "mobx-react-lite";
import { useEffect } from "react";

const App = observer(() => {
  const notesStore = useNotesStore();
  useEffect(() => {
    console.log(notesStore.notes);
  }, [notesStore]);
  return (
    <>
      <ul>
        {notesStore.notes.map((note) => (
          <li onClick={() => notesStore.removeNote(note.id)} key={note.id}>
            {note.text}
          </li>
        ))}
      </ul>
      <NewNoteForm />
    </>
  );
});

export default App;
