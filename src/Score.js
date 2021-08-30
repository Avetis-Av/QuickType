
import React from 'react';
import './score.css';
import './button.css';

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
        <div className="score">
            <h1> Your Score Is: </h1>
            <h1> {Math.round(((totScore/minutes) + Number.EPSILON) * 100) / 100} WPM </h1>
            <button class="button-50 join2" onClick={() => setDef() }>
                Try Again?
            </button>
        </div> 
    )
}
