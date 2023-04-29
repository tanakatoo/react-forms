import React, { useState } from "react"
import ToDoForm from "./ToDoForm"
import ToDo from './ToDo'
import { v4 as uuid } from "uuid"


const ToDoList = () => {
    const INITIAL_STATE = []
    const [toDo, setToDo] = useState(INITIAL_STATE)

    const addData = (task, id) => {
        setToDo(toDo => [...toDo, { task: task, id: id }])
    }

    const removeTask = (e) => {

        setToDo(toDo => toDo.filter(t => t.id != e.target.parentElement.id))
    }
    return (
        <div>
            <ToDoForm addData={addData} />
            <ul>
                {toDo.map(t => <ToDo task={t.task} key={t.id} id={t.id} removeTask={removeTask} />)}
            </ul>
        </div>

    )
}

export default ToDoList