import { useState, useEffect } from "react";
import '../styles/reset.scss';
import '../styles/App.scss';
import fetchFromApi from '../data/fetchData';
import Header from './Header';
import NotesList from './notes/NotesList'
import FormComplete from './form/FormComplete';
import Spinner from './Spinner';

function App() {
  const [listNotes, setListNotes] = useState([]);
  const[isFetching, setIsFetching] = useState(false);

  useEffect(()=> {
    setIsFetching(true);
    fetchFromApi().then(listNotes => {
      setIsFetching(false);
      setListNotes(listNotes);
    });
  }, []);

  //HANDLERS
  const handleNewNote = event => {
    event.preventDefault();
    const dataForm = event.target;
    if(dataForm.title.value !== '' && dataForm.body.value !== ''){
      setListNotes([...listNotes, {
        id: getNextId(),
        title: dataForm.title.value,
        body: dataForm.body.value
      }]);
      cleanForm(dataForm);
    }else{
      alert('Please, fill the gap :)');
    }
  }

  const getNextId = () => {
    const highNoteById = listNotes[listNotes.length-1];
    return highNoteById.id + 1;
  }

  const cleanForm = dataForm => {
    dataForm.title.value = "";
    dataForm.body.value = "";
  }

  const handleDeleteNote = noteIdDelete => {
    const notesNotDeleted = listNotes.filter(note => note.id !== noteIdDelete);
    setListNotes(notesNotDeleted);
  }

  return (
    <div className="App">
      <Header />
      <main className="main">
        <FormComplete handleNewNote={handleNewNote}/>
        {listNotes.length === 0 ? 'Please, write a new note.': <NotesList notesList={listNotes} handleDeleteNote={handleDeleteNote}/>}
      </main>
      {isFetching ? <Spinner /> : null}
    </div>
  );
}

export default App;
