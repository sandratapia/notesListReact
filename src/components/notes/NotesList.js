import React from "react";
import Note from './Note';
import '../../styles/notes/notesList.scss'

const notesList = (props) => {
    return (
        <ul className="list__notes">
            {props.notesList.map((note) => (
                <Note key={note.id} id={note.id} title={note.title} body={note.body} handleDeleteNote={props.handleDeleteNote}/>
            ))}
        </ul>
    );
};

export default notesList;