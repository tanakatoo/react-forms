import React from "react";

const ToDo = ({ task, id, removeTask }) => {

    return (
        <li id={id}>{task} <button onClick={removeTask}>X</button></li>
    )


}

export default ToDo