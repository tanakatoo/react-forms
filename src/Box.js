import React from "react"

const Box = ({ width, height, color }) => {

    return (
        <div data-testid="box" style={{ width: parseInt(width), height: parseInt(height), backgroundColor: color }}>

        </div>
    )
}

export default Box;