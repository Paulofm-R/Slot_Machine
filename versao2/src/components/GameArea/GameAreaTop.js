import React from 'react'

const GameAreaTop = ({props, selectedBet}) => {
  const {playerCredits, creditsEarned, creditsBetty} = props

  const handleBetChange = e => {
    selectedBet(e.target.value);
  }


  return (
    <div id="gameAreaTop">
        <div id="creditsInfo">
                  Credits: {playerCredits}€
        </div>
        <div id="playerInfo">
          <span id="creditsEarned">Credits earned: {creditsEarned}€</span>
          <span id="creditsBet">Credits bet: {creditsBetty}€ / 500€</span>
        </div>
        <div id="Bets">
            <span>Bets:</span>
            <input type="radio" id="bet1" name="bet" value="1" onChange={handleBetChange} defaultChecked  />
            <label htmlFor="bet1">1€</label>
            <input type="radio" id="bet2" name="bet" value="2" onChange={handleBetChange} />
            <label htmlFor="bet2">2€</label>
            <input type="radio" id="bet5" name="bet" value="5" onChange={handleBetChange} />
            <label htmlFor="bet3">5€</label>
        </div>
      </div>
  )
}

export default GameAreaTop