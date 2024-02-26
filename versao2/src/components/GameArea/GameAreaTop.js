import React from 'react'
import { useState, useEffect } from 'react'

const GameAreaTop = ({ props, selectedBet }) => {
  const { playerCredits, creditsEarned, creditsBetty, hasFinished } = props
  const [previousHasFinished, setPreviousHasFinished] = useState(hasFinished)
  const [previousPlayerCredits, setPreviousPlayerCredits] = useState(playerCredits)
  const [previousCreditsBetty, setPreviousCreditsBetty] = useState(creditsEarned)

  useEffect(() => {
    if (hasFinished && !previousHasFinished) {
      // setPreviousPlayerCredits(playerCredits);
      setPreviousCreditsBetty(creditsEarned);
      setPreviousHasFinished(true);
    } else if (previousHasFinished && !hasFinished) {
      setPreviousHasFinished(false);
    } else if (previousPlayerCredits !== playerCredits && previousHasFinished && hasFinished) {
      setPreviousPlayerCredits(playerCredits);
    }
  }, [hasFinished, playerCredits])

  return (
    <div id="gameAreaTop">
      <div id="creditsInfo">
        Credits: {previousPlayerCredits}€
      </div>
      <div id="playerInfo">
        <span id="creditsEarned">Credits earned: {previousCreditsBetty}€</span>
        <span id="creditsBet">Credits bet: {creditsBetty}€ / 500€</span>
      </div>
      <div id="Bets">
        <span>Bets:</span>
        <input type="radio" id="bet1" name="bet" value="1" onChange={e => selectedBet(e.target.value)} defaultChecked />
        <label htmlFor="bet1">1€</label>
        <input type="radio" id="bet2" name="bet" value="2" onChange={e => selectedBet(e.target.value)} />
        <label htmlFor="bet2">2€</label>
        <input type="radio" id="bet5" name="bet" value="5" onChange={e => selectedBet(e.target.value)} />
        <label htmlFor="bet3">5€</label>
      </div>
    </div>
  )
}

export default GameAreaTop