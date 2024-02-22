import React from 'react'
import './GameArea.css';

// Components
import GameAreaTop from "./GameAreaTop.js"
import GameAreaMid from "./GameAreaMid.js"

const GameArea = () => {
  const numbers = [0, 7, 2];

  return (
    <div id="gameArea">
      <GameAreaTop />
      <GameAreaMid numbers={numbers}/>
    </div>
  )
}

export default GameArea