import React, { useState } from "react"
import ToDoForm from "./ToDoForm"
import ToDo from './ToDo'
import { v4 as uuid } from "uuid"


const ToDoList = () => {
    const INITIAL_STATE = []
    const [toDo, setToDo] = useState(INITIAL_STATE)

    const addData = (task) => {
        setToDo(toDo => [...toDo, { task: task }])
    }

    const removeTask = (e) => {
        console.log(e.target.parentElement)
        console.log('removing taskfrom toDo')

    }
    return (
        <div>
            <ToDoForm addData={addData} />
            <ul>
                {toDo.map(t => <ToDo task={t.task} key={uuid()} removeTask={removeTask} />)}
            </ul>
        </div>

    )
}

export default ToDoList