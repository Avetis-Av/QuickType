
import React from 'react';

export default function Score ({styles, minutes, setDef}) {

    function getScore() {
        var curScore = 0;
        var newStyles = [];

        for ( var j = 0; j < styles.length; ++j ) newStyles = newStyles.concat( styles[j] );
        for (var i = 0; i < newStyles.length; ++i)  if ( newStyles[i].includes('correct') ) ++curScore;

        var num = Math.floor(curScore/5 + 0.01)
        return ( !isNaN( num )? num: 0 );
    }

    var totScore = getScore();
    
    return (
        <div>
            <h1> Your Score Is: </h1>
            <h1> {totScore/minutes} WPM </h1>
            <button onClick={() => setDef() }>
                Try Again?
            </button>
        </div> 
    )
}
