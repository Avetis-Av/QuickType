import React, {useState} from 'react';
import Welcome from './Welcome';
import GetTimer from './GetTimer';
import Game from './Game';
import Score from './Score';
import './app.css';



function App() {

  const [game, setGame] = useState(false);
  const [timer, setTimer] = useState(false);
  const [fin, setFin] = useState(false);
  const [min, setMin] = useState(0);
  const [sec, setSec] = useState(45);
	const [styles, setStyles] = useState([]);

  function setDef() {
    setGame(true);
    setTimer(false);
    setFin(false);
    setMin(0);
    setSec(45);
  }
  function getPage () {
    if ( !game && !timer ) { return ( <Welcome setStart={setGame} /> ); } 
    else if ( game && !timer ) { return ( <GetTimer setT={setTimer} setM={setMin} setS={setSec} min={min} sec={sec} /> ); }
    else if ( !fin && timer ) { return ( <Game givenMin={ !isNaN(min)? min: 0 } givenSec={ !isNaN(sec)? sec: 0 } setStyles={setStyles} setFin={setFin} /> ); }
    else if ( fin ) { return ( <Score styles={styles} minutes={ min + sec/60 } setDef={setDef} /> ); }
  }
{/* <div className="contacts"> 
        Made By: <a href="https://www.linkedin.com/in/kefan-cao-2801bb165/" target="_blank" rel="noreferrer">Kefan Cao</a> and <a href="https://www.linkedin.com/in/avetis-avagyan/">Avetis Avagyan</a>
      </div> */}
  return (getPage());
}

export default App;
