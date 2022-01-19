import React, { useState } from 'react';

const BoxForm = (props) => {

    ///// Paramaters for box \\\\\
    const [color, setColor] = useState("");
    const [height, setHeight] = useState("");
    const [width, setWidth] = useState("");
    
    ///// Construstor \\\\\
    const newBox = { color, width, height };

    ///// Create function \\\\\
///// addBox is a function passed from app.js \\\\\
    const createBox = (e) => {
        e.preventDefault();
        const newBox = { color, height, width}
        props.addBox(newBox)
        setColor("")
        setHeight("")
        setWidth("")
    };
    ///// onSubmit calls createBox function \\\\\
    return (
        <div className="d-inline-flex">

            <form onSubmit={createBox} className="form-control">
                <label> Color: </label>
                <input type="text" value={color} onChange={(e) => setColor(e.target.value)} />
                <label> Height: </label>
                <input type="number" value={height} onChange={(e) => setHeight(parseInt(e.target.value))} />
                <label> Width: </label>
                <input type="number" value={width} onChange={(e) => setWidth(parseInt(e.target.value))} />
                <input type="submit" value="Add a Box" />
            </form>

        </div>
    )
}

export default BoxForm;