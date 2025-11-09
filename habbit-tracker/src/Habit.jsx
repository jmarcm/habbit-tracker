import React from "react";
import { FaCirclePlus, FaSquareCheck } from "react-icons/fa6";

export default function Habit({ text, status, value, ...props }) {
    console.log(props);

    const partialIndicatorsElements = [];
    for (let i = 0; i < value; i++) {
        partialIndicatorsElements.push(<li key={i}><FaSquareCheck /></li>);
    }

    return (
        <div className={`habit ${status} ${value}`}>

            <div className="main-content">
                <div>{text}</div>

                {(status === 'done') ? (
                    <div className="indicator">
                        <FaSquareCheck />
                    </div>
                ) : (

                    <button className="btn">
                        <FaCirclePlus />
                    </button>
                )}
            </div>

            {value > 1 && (
                <ul className="partial-indicators">
                    {partialIndicatorsElements}
                </ul>
            )}


        </div>
    )
}