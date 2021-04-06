import { render } from '@testing-library/react';

import NotesList from './notes/NotesList';
import Note from './notes/Note';
import FormComplete from './form/FormComplete';

describe("Notes List", () => {
    test("renders Notes List component", () => {
      const listNotes = [{userId: 1, id: 1, title: "delectus aut autem", completed: false}, {userId: 1, id: 2, title: "quis ut nam facilis et officia qui", completed: false} ];
      const handleDeleteNote = jest.fn();
      render(
        <NotesList notesList={listNotes} handleDeleteNote={handleDeleteNote} />
      );
    });
});

describe("Note", () => {
    test("renders component Note", () => {
      const note = {userId: 1, id: 1, title: "delectus aut autem", completed: false};
      const handleDeleteNote = jest.fn();
      render(
        <Note key={note.id} id={note.id} title={note.title} body={note.body} handleDeleteNote={handleDeleteNote}/>
      );
    });
});

describe("FormComplete", () => {
    test("renders component FormComplete", () => {
      const handleNewNote = jest.fn();
      render(
        <FormComplete handleNewNote={handleNewNote} />
      );
    });
  });