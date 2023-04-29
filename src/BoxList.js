import React, { useState } from "react"
import Box from "./Box"
import NewBoxForm from "./NewBoxForm"
import { v4 as uuid } from 'uuid';

const BoxList = (props) => {
    const INITIAL_STATE = []
    const [boxesData, setBoxesData] = useState(INITIAL_STATE)


    const addItem = (width, height, color) => {
        setBoxesData(boxesData => [...boxesData, { width, height, color }])
        console.log(boxesData)
    }


    return (
        <div>
            <NewBoxForm addItem={addItem} />
            <h1>Box List</h1>
            {boxesData.map(item => <Box width={item.width}
                height={item.height}
                color={item.color}
                key={uuid()}
            />)}
        </div>
    )
}

export default BoxList