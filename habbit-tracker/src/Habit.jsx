import React from "react";
import { FaCirclePlus, FaSquareCheck } from "react-icons/fa6";

export default function Habit({ name, status, daily_amount, ...props }) {

    const partialIndicatorsElements = [];
    for (let i = 0; i < daily_amount; i++) {
        partialIndicatorsElements.push(<li key={i}><FaSquareCheck /></li>);
    }

    return (
        <div className={`habit ${status} ${daily_amount}`}>

            <div className="main-content">
                <div>
                    {name} {daily_amount > 1 && `(${daily_amount})`}
                </div>

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

            {daily_amount > 1 && (
                <ul className="partial-indicators">
                    {partialIndicatorsElements}
                </ul>
            )}


        </div>
    )
}