import React, {useState} from 'react'; 
import Welcome from './Welcome';
import GetTimer from './GetTimer';
import Game from './Game';

// App only returns Welcome Page so far
function App() {

  const [game, setGame] = useState(false); 
  const [timer, setTimer] = useState(false);
  const [min, setMin]=useState(0);
  const [sec, setSec]=useState(45);

  function getPage () {
    if ( !game && !timer ) { return ( <Welcome setStart={setGame} /> ); } 
    else if ( game && !timer ) { return ( <GetTimer setT={setTimer} setM={setMin} setS={setSec} min={min} sec={sec} /> ); }
    else if ( timer ) { return ( <Game givenMin={min} givenSec={sec} /> ); }
  }

  return ( getPage() );
}

export default App;
