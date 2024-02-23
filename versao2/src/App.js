import { useState } from 'react';

import './App.css';
import GameArea from './components/GameArea/GameArea.js'
import AddCredits from './components/AddCredits/AddCredits.js'
import Warnings from './components/Warnings/Warnings.js';

const App = () => {
  const [isAddCredits, setAddCredits] = useState(false);
  const [moreCredits, setMoreCredits] = useState(0)
  const [msg, setMsg] = useState('')

  const addMoreCredits = () => {
    setAddCredits(true);
  }

  const cancelMoreCredits = () => {
    setAddCredits(false);
  }

  const toAddCredits = (value) => { 
    setMoreCredits(value);
    setAddCredits(false);
  }

  const resetMoreCredits = (value) => {
    setMoreCredits(value);
  }

  return (
    <div className="App">
      <h1>Slot Machine</h1>
      <GameArea addMoreCredits={addMoreCredits} moreCredits={moreCredits} resetMoreCredits={resetMoreCredits} setMsg={setMsg}/>
      {isAddCredits && <AddCredits toAddCredits={toAddCredits} cancelMoreCredits={cancelMoreCredits}/>}
      <Warnings msg={msg}/>
    </div>
  );
}

export default App;
