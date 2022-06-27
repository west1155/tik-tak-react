import React from "react";
import s from './Square.module.css';


const Square = ({value, handleClick, index}) => {
    return (
        <button className={s.button} onClick={() => handleClick(index)}>{value}</button>
    )
}

export default Square;