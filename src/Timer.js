
import React from 'react'
import { useState, useEffect } from 'react';

// calculates and returns the Timer in the syntax of (minutes:seconds)
const Timer = ({initMin, initSec, setFin}) => {
    const [ minutes, setMinutes ] = useState(parseInt(initMin));
    const [ seconds, setSeconds ] =  useState(parseInt(initSec));
    // const [ timeEnd, setTimeEnd ] = useState(false);
    useEffect(() => {
        let myInterval = setInterval(() => {
            if (seconds > 0) {
                setSeconds( old => old - 1 );
            }
            if (seconds === 0) {
                if (minutes === 0) {
                    setFin(true); // Ends the game
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
        <h1> {minutes}:{seconds < 10 ?  `0${seconds}` : seconds} </h1>
    );
}

export default Timer;
