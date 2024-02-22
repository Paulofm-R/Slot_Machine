import React from 'react'

const GameAreaTop = () => {
  return (
    <div id="gameAreaTop">
        <div id="creditsInfo">
                  Credits: 0€
        </div>
        <div id="playerInfo">
          <span id="creditsEarned">Credits earned: 0€</span>
          <span id="creditsBet">Credits bet: 0€ / 200€</span>
        </div>
        <div id="Bets">
            <span>Bets:</span>
            <input type="radio" id="bet1" name="bet" value="1" defaultChecked  />
            <label htmlFor="bet1">1€</label>
            <input type="radio" id="bet2" name="bet" value="2" />
            <label htmlFor="bet2">2€</label>
            <input type="radio" id="bet5" name="bet" value="5" />
            <label htmlFor="bet3">5€</label>
        </div>
      </div>
  )
}

export default GameAreaTop