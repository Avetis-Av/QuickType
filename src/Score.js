
import React from 'react';

export default function Score ({styles}) {
    const total = Math.ceil(styles.length/5);

    function getScore() {
        // var index = 0;
        // var total = 0;
        var curScore = 0;
        var newStyles = [];

        for ( var j = 0; j < styles.length; ++j ) newStyles = newStyles.concat( styles[j] );
        for (var i = 0; i < newStyles.length; ++i){
            newStyles[i] === 'correct' && ++curScore; 
        }

        return Math.floor(curScore/5 + 0.01); 

        // for ( var i = 0; i < newStyles.length; ++i ) {
        //     ++index;
        //     newStyles[i] === "correct" && ++curScore;
        //     console.log("Score: " + curScore);
        //     if ( index === 5 || curScore === 5 ) {
        //         index = 0;
        //         curScore = 0;
        //         if ( curScore === 5 ) ++total;
        //         console.log("Total: " + total);
        //     }
        // }
        // return total;


    }

    var totScore = getScore();
    
    return (
        <div>
            <h1> {styles.length} </h1>
            <h1> {total} </h1>
            <h1> {totScore} </h1>
        </div> 
    )
}
