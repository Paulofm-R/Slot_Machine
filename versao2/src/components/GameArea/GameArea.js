import React from 'react'
import './GameArea.css';

const GameArea = () => {
  return (
    <div id="gameArea">
      <div id="playerInfo">
                Credits: 0
        </div>
        <div id="Bets">
            <input type="radio" id="bet1" name="bet" value="1" checked />
            <label for="bet1">1€</label>
            <input type="radio" id="bet2" name="bet" value="2" />
            <label for="bet2">2€</label>
            <input type="radio" id="bet5" name="bet" value="5" />
            <label for="bet3">5€</label>
        </div>
    </div>
  )
}

export default GameArea