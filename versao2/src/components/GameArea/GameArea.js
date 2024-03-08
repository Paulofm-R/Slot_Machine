import React from 'react'
import { useState, useEffect } from 'react'

// CSS
import './GameArea.css';

// Components
import GameAreaTop from "./GameAreaTop.js"
import GameAreaMid from "./GameAreaMid.js"
import GameAreaBottom from "./GameAreaBottom.js"

const GameArea = ({ addMoreCredits, moreCredits, resetMoreCredits, setMsg, info }) => {
  const [numbers, setNumbers] = useState([]);
  const [playerCredits, setPlayerCredits] = useState(20);
  const [creditsEarned, setCreditsEarned] = useState(0);
  const [creditsBetty, setCreditsBetty] = useState(0);
  const [selectedBet, setSelectedBet] = useState(1);
  const [hasFinished, setHasFinished] = useState(true);

  const playGame = () => {
    setMsg('', false);

    if (playerCredits < selectedBet || creditsBetty + +selectedBet > 500) {
      if (playerCredits < selectedBet)
        setMsg(`Need more ${selectedBet - playerCredits} credits`);
      else if (creditsBetty === 500)
        setMsg(`You have already reached the limit of 500 credits per day. Withdraw your money and come back tomorrow`);
      else if (creditsBetty + +selectedBet > 500) {
        setMsg(`You can no longer place a bet of that amount, make a smaller one`);
      }
    } else {
      if (numbers.length > 0)
        setNumbers([])

      const newNumbers = []

      for (let i = 0; i < 3; i++) {
        const num = Math.floor(Math.random() * 10);
        newNumbers.push(num)
      }

      setNumbers(newNumbers)

      const countSevens = newNumbers.filter(num => num === 7).length;
      let currentPlayerCredits = playerCredits
      let msg
      let win;

      switch (countSevens) {
        case 0:
          currentPlayerCredits -= selectedBet;
          msg = `Oh, no 7 came. You lost ${selectedBet}€`
          win = false;
          break;
        case 1:
          currentPlayerCredits += (selectedBet * 2);
          msg = `A 7 came! You earn ${selectedBet * 2}€!`
          win = true;
          break;
        case 2:
          currentPlayerCredits += (selectedBet * 3);
          msg = `Good, two 7s came! You earn ${selectedBet * 3}€!`
          win = true;
          break;
        case 3:
          currentPlayerCredits += (selectedBet * 10);
          msg = `CONGRATULATIONS! Three 7s came! You earn ${selectedBet * 10}€! :D`
          win = true;
          break;
        default:
          break;
      }

      setCreditsBetty(creditsBetty + +selectedBet);
      setCreditsEarned(creditsEarned + (currentPlayerCredits - playerCredits));

      setTimeout(() => {
        setPlayerCredits(currentPlayerCredits);
        setMsg(msg, win);
      }, 6000)

    }
  }

  const giveUp = () => {
    const status = creditsEarned > 0 ? 'you win' : 'you get lost'
    setMsg(`Game finished! You can withdraw ${playerCredits}€. Today ${status} ${Math.abs(creditsEarned)}€`)
    setPlayerCredits(0);
  }

  useEffect(() => {
    const more = playerCredits + moreCredits
    setPlayerCredits(more);
    resetMoreCredits(0) // para não dar problemas ao adicionar 2 vezes a mesma quandidade de creditos
  }, [moreCredits]);

  return (
    <div id="gameArea">
      <GameAreaTop selectedBet={setSelectedBet} props={{ playerCredits, creditsEarned, creditsBetty, hasFinished }} />
      <GameAreaMid numbers={numbers} setHasFinished={setHasFinished} />
      <GameAreaBottom onClickPlayBtn={playGame} onClickAddCreditsBtn={() => addMoreCredits(true)} onClickGiveUpBtn={giveUp} onClickInfosBtn={() => info(true)} hasFinished={hasFinished} />
    </div>
  )
}

export default GameArea;