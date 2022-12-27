const NotesList = ({notes}) => {
    const url = 'http://localhost:7777/notes';

    const deleteData = (e, note) => {
        e.preventDefault()
        const requestOptions = {
          method: "DELETE",
        };
        fetch(`${url}/${note.id}`, requestOptions).then((res) => res);
      }
    return (
        <ul className="NotesList">{notes.map(i => <li key={i.id}>{i.content}<button className="delete-btn" onClick={(e) => deleteData(e, i)}>Delete</button></li>)}</ul>
    )
}

export default NotesList