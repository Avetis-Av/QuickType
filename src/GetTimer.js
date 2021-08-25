
import React from "react";

export default function GetTimer(props) {

    return (
        <div className="TimeInp">
            <h1> Enter Time Interval </h1>

            <input type="text" value={props.min} onChange={m => props.setM(m.target.value)} />
            <input type="text" value={props.sec} onChange={s => props.setS(s.target.value)} />

            <button onClick={() => props.setT(true) }> 
                Enter 
            </button>
        </div>
    )
}