import React from "react";
import { useParams } from "react-router-dom";

const Input = () => {
    const {input} = useParams(); 
    return isNaN(input) ? <h3>The Word is: {input}</h3> : <h3>The Number is: {input}</h3>
}

export default Input;