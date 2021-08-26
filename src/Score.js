
import React, { useEffect } from 'react';

export default function Score ({styles}) {
    var total = Math.ceil(styles.length/5);
    var totScore = 0;
    //var recStyles = [];

    useEffect(() => {
        for ( var i = 0; i < styles.length; i += 5 ) {
            var curScore = 0;
            var j = 0;
            for ( j = 0; j < 5 || j + i < styles.length; ++j ) {
                if ( styles[i + j][styles[i + j].length - 1] === "correct" ) ++curScore;
            }
            totScore += Math.floor( curScore/j );
        }
    });
    
    return (
        <div>
            <h1> {styles[0][ styles[0].length - 1 ]} </h1>
            <h1> {total} </h1>
            <h1> {totScore} </h1>
        </div> 
    )
}
