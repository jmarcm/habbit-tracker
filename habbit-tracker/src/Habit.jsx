import React from "react";
import { FaCirclePlus, FaSquareCheck } from "react-icons/fa6";

export default function Habit({ text, status, type, ...props }) {
    console.log(props);
    return (
        <div className={`habit ${status}`}>
            <div>{text}</div>
            { (status === 'in-progress') ? (
            <button className="btn">
                <FaCirclePlus />
            </button>
            ) : (
            <div className="indicator">
                <FaSquareCheck />
            </div>
            ) }


        </div>
    )
}