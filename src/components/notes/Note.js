import React from "react";

const note = (props) => {
    const onClick = () => {
        props.handleDeleteNote(props.id);
    }
    return (
        <li id={props.id} className="note">
            <div className="note__complete">
                <h2>{props.title}</h2>
                <p>{props.body}</p>
            </div>
            <div onClick={onClick} className="delete">
                <p>Delete</p>
            </div>
        </li>
    );
};

export default note;