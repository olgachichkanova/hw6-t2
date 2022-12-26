import { useState } from 'react';
import shortid from "shortid"

const NoteForm = ({loadData}) => {
    const url = 'http://localhost:7777/notes';
    const [note, setNote] = useState("")
    const postData = (e, note) => {
        e.preventDefault()
        const requestOptions = {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ id: shortid.generate(), content: note }),
        };
        fetch(url, requestOptions).then((res) =>
            loadData()
        );
        
        setNote("")
    };

    function handleInput(e){
        setNote(e.target.value)
    }

    return (
        <form className='NoteForm'>
            <textarea type="text" value={note} onChange={handleInput} required />
            <button onClick={(e) => postData(e, note)}>Add</button>
        </form>
    )
}

export default NoteForm;