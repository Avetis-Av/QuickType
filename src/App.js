import React, {useState} from 'react'; 
import Welcome from './Welcome';
import GetTimer from './GetTimer';
import Game from './Game';
import Score from './Score';

// App only returns Welcome Page so far
function App() {

  const [game, setGame] = useState(false);
  const [timer, setTimer] = useState(false);
  const [fin, setFin] = useState(false);
  const [min, setMin]=useState(0);
  const [sec, setSec]=useState(45);
	const [styles, setStyles] = useState([]);

  function getPage () {
    if ( !game && !timer ) { return ( <Welcome setStart={setGame} /> ); } 
    else if ( game && !timer ) { return ( <GetTimer setT={setTimer} setM={setMin} setS={setSec} min={min} sec={sec} /> ); }
    else if ( !fin && timer ) { return ( <Game givenMin={ !isNaN(min)? min: 0 } givenSec={ !isNaN(sec)? sec: 0 } setStyles={setStyles} setFin={setFin} /> ); }
    else if ( fin ) { return ( <Score styles={styles} /> ); }
  }

  return ( getPage() );
}

export default App;
