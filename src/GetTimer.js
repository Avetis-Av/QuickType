
import React, {useState} from "react";

export default function GetTimer(props) {

    const [min, setMin]=useState(0);
    const [sec, setSec]=useState(0);

    function getMinData ( val ) { setMin(val.target.value) }
    function getSecData ( val ) { setSec(val.target.value) }

    return (
        <div className="TimeInp">
            <h1> Enter Time Interval </h1>

            <input type="number" onChange={getMinData} />
            <input type="number" onChange={getSecData} />

            <button onClick={() => 
                {
                    props.setT(true);
                    props.setM({min});
                    props.setS({sec});
                }
            }> 
                Enter 
            </button>
        </div>
    )
}