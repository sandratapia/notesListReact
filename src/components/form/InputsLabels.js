import React from "react";

const input = () => {
    return (
        <>  
            <div className="title">
                <label htmlFor="title">Title</label>
                <input type="text" id="title"/>
            </div>
            <div className="body">
                <label htmlFor="body">Description</label>
                <textarea name="textarea" rows="5" cols="40" id="body"></textarea>
            </div>
        </>
    );
};

export default input;