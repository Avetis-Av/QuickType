import React, {useState} from 'react'; 
import Welcome from './Welcome';

// App only returns Welcome Page so far
function App() {
  const [game, setGame] = useState(false); 
  return (
    {game ? <Welcome start={}/>}
  );
}

export default App;
