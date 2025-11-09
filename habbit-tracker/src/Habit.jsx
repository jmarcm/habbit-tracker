import React from "react";
import { FaCirclePlus } from "react-icons/fa6";

export default function Habit() {
    return (
        <div className="habit todo">
            <span>Marcher 15 mn</span>
            <button className="btn">
                <FaCirclePlus />
            </button>
        </div>
    )
}