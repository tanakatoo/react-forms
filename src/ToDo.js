import React from "react";

const ToDo = ({ task, removeTask }) => {

    return (
        <li>{task} <button onClick={removeTask}>X</button></li>
    )


}

export default ToDo