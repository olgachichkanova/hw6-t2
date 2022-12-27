import { useEffect, useState } from 'react';
import './App.css';
import NoteForm from './components/NoteForm';
import NotesList from './components/NotesList';

function App() {
  const [notesList, setNotesList] = useState([]);
  const url = 'http://localhost:7777/notes';

  const loadData = () => {
    fetch(url)
      .then((response) => response.json())
      .then((result) => {
        setNotesList(result)
        console.log('notes list got updated')
      })
      .catch(() => {
        console.log('error')
      });
  };
  
  useEffect(loadData, [notesList.length])
  return (
    <div className="App">
      <header>
        <div>
          <h1>Notes</h1>
          <button onClick={loadData}>Update</button>
        </div>
      </header>
      <NotesList notes={notesList} />
      <NoteForm />
    </div>
  );
}

export default App;
