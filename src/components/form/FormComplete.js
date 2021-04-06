import React from "react";
import InputLabels from './InputsLabels';
import SubmitBtn from './SubmitBtn';
import '../../styles/form/formComplete.scss'

const formComplete = (props) => {
    return (
        <form onSubmit={props.handleNewNote} className="form">  
            <InputLabels/>
            <SubmitBtn />
        </form>
    );
};

export default formComplete;