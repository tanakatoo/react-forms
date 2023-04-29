import React, { useState } from "react";

const ToDoForm = ({ addData }) => {
    const INITIAL_STATE = {
        task: ""
    }
    const [formData, setFormData] = useState(INITIAL_STATE)
    const handleChange = (e) => {
        const { name, value } = e.target
        setFormData(formData => ({
            ...formData,
            [name]: value
        }))
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        addData(formData.task)
    }
    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="task">Task</label>
            <input type='text' name="task" id="task" onChange={handleChange} value={formData.task} />
            <button>Add</button>
        </form>
    )
}

export default ToDoForm