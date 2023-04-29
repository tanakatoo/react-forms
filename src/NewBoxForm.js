import React, { useState } from "react"

const NewBoxForm = ({ addItem }) => {
    const INITIAL_STATE = { width: '', height: '', color: '' }
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
        //call something that adds that item into state, this is defined in the BoxList becuase we are adding to BoxList
        //form state is local but we take values and pass values to parent
        addItem(formData.width, formData.height, formData.color)
        console.log(formData.width, formData.height, formData.color)
        setFormData(INITIAL_STATE)

    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label htmlFor="width" >Width</label>
                <input name="width" id="width" type="number" value={formData.width} onChange={handleChange} />
                <label htmlFor="height" >Height</label>
                <input name="height" id="height" type="number" value={formData.height} onChange={handleChange} />
                <label htmlFor="color" >Color</label>
                <input name="color" id="color" type="text" value={formData.color} onChange={handleChange} />
                <button>Add</button>
            </form>
        </div>
    )
}

export default NewBoxForm