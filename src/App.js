import React, {useState} from 'react'; 
import Welcome from './Welcome';
import Game from './Game'

// App only returns Welcome Page so far
function App() {
  const [game, setGame] = useState(false); 
  return (
    <>
      {!game ? <Welcome setStart={setGame} /> : <Game />}
    </>
  );
}

export default App;
