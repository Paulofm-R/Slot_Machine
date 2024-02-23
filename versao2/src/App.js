import { useState } from 'react';

import './App.css';
import GameArea from './components/GameArea/GameArea.js'
import AddCredits from './components/AddCredits/AddCredits.js'

const App = () => {
  const [isAddCredits, setAddCredits] = useState(false);

  const addMoreCredits = () => {
    setAddCredits(true);
  }

  return (
    <div className="App">
      <h1>Slot Machine</h1>
      <GameArea addMoreCredits={addMoreCredits}/>
      {isAddCredits && <AddCredits/>}
    </div>
  );
}

export default App;
