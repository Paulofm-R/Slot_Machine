import { useState } from 'react';

import './App.css';
import GameArea from './components/GameArea/GameArea.js'
import AddCredits from './components/AddCredits/AddCredits.js'
import Warnings from './components/Warnings/Warnings.js';
import Info from './components/Info/Info.js';

const App = () => {
  const [isAddCredits, setAddCredits] = useState(false);
  const [isInfo, setIsInfo] = useState(false);
  const [moreCredits, setMoreCredits] = useState(0)
  const [msg, setMsg] = useState('')
  const [win, setWin] = useState(false)

  const toAddCredits = (value) => {
    setMoreCredits(value);
    setAddCredits(false);
  }

  const resetMoreCredits = (value) => {
    setMoreCredits(value);
  }

  const newMsg = (newMsg, newWin) => {
    setMsg(newMsg);
    setWin(newWin);
  }

  return (
    <div className="App">
      <h1>Slot Machine</h1>
      <GameArea addMoreCredits={setAddCredits} moreCredits={moreCredits} resetMoreCredits={resetMoreCredits} setMsg={newMsg} info={setIsInfo} />
      {isAddCredits && <AddCredits toAddCredits={toAddCredits} cancelMoreCredits={setAddCredits} />}
      <Warnings props={{msg, win}} />
      {isInfo && <Info info={setIsInfo} />}
    </div>
  );
}

export default App;
