
import React from 'react';
import './GetTimer.css';

export default function GetTimer(props) {

    return (
        <div className="TimeInp">
            <div className="input-prompt">
                <h1> Enter The Time Limit </h1>
                <div className="inputs"> 
                    <input type="text" value={props.min} onChange={m => props.setM(m.target.value)} placeholder={"minutes"} />
                    <input type="text" value={props.sec} onChange={s => props.setS(s.target.value)} placeholder={"seconds"} />
                </div>
            </div>
            <button class="button-50" onClick={() => props.setT(true) }>  
                Enter
            </button>
        </div>
    )
}