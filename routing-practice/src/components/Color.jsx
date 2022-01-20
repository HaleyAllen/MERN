import React from "react";
import { useParams } from "react-router-dom";

const Color = () => {
    const {input, color1, color2} = useParams(); 
    
    return (
        isNaN(input) ? 
        <h1 style={{color: color1, background: color2}}>The Word is: {input}</h1>
        : <h1 style={{color: color1, background: color2}}>The Number is: {input}</h1>
        ) 
}

export default Color;