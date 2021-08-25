
import React from 'react'
import { useState, useEffect } from 'react';

// calculates and returns the Timer in the syntax of (minutes:seconds)
const Timer = ({initMin, initSec}) => {
    const [ minutes, setMinutes ] = useState(parseInt(initMin));
    const [ seconds, setSeconds ] =  useState(parseInt(initSec));
    useEffect(() => {
        let myInterval = setInterval(() => {
            if (seconds > 0) {
                setSeconds( old => old - 1 );
            }
            if (seconds === 0) {
                if (minutes === 0) {
                    clearInterval(myInterval)
                } else {
                    setMinutes( old => old - 1 );
                    setSeconds(59);
                }
            }
        }, 1000)
        return () => { clearInterval(myInterval); };
    });

    return (
        <div>
            { minutes === 0 && seconds === 0
                ? <h1> No More Time Left! </h1>
                : <h1> {minutes}:{seconds < 10 ?  `0${seconds}` : seconds} </h1> 
            }
        </div>
    )
}

export default Timer;
