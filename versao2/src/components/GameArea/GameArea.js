import React from 'react'
import {useState, useEffect } from 'react'

// CSS
import './GameArea.css';

// Components
import GameAreaTop from "./GameAreaTop.js"
import GameAreaMid from "./GameAreaMid.js"
import GameAreaBottom from "./GameAreaBottom.js"

const GameArea = ({addMoreCredits, moreCredits, resetMoreCredits, setMsg}) => {
  const [numbers, setNumbers] = useState([]);
  const [playerCredits, setPlayerCredits] = useState(20);
  const [creditsEarned, setCreditsEarned] = useState(0);
  const [creditsBetty, setCreditsBetty] = useState(0);
  const [selectedBet, setSelectedBet] = useState(1)

  const playGame = () => {
    if (playerCredits < selectedBet || creditsBetty + +selectedBet > 500) {
      if (playerCredits < selectedBet)
          setMsg(`Need more ${selectedBet-playerCredits} credits`);
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
      let  currentPlayerCredits = playerCredits
      console.log(currentPlayerCredits);

      switch (countSevens) {
          case 0:
              currentPlayerCredits -= selectedBet;
              break;
          case 1:
              currentPlayerCredits += (selectedBet * 2);
              break;
          case 2:
              currentPlayerCredits += (selectedBet * 3);
              break;
          case 3:
              currentPlayerCredits += (selectedBet * 10);
              break;
          default:
              break;
      }

      setCreditsEarned(creditsEarned + (currentPlayerCredits - playerCredits));
      setPlayerCredits(currentPlayerCredits);
      setCreditsBetty(creditsBetty + +selectedBet);
    }
  }

  const addCredits = () => {
    addMoreCredits()
  }

  const giveUp = () => {
    
  }

  useEffect(() => {
    const more = playerCredits + moreCredits
    setPlayerCredits(more);
    resetMoreCredits(0) // para não dar problemas ao adicionar 2 vezes a mesma quandidade de creditos
  }, [moreCredits]);

  return (
    <div id="gameArea">
      <GameAreaTop selectedBet={setSelectedBet} props={{playerCredits, creditsEarned, creditsBetty}}/>
      <GameAreaMid numbers={numbers}/>
      <GameAreaBottom onClickPlayBtn={playGame} onClickAddCreditsBtn={addCredits} onClickGiveUpBtn={giveUp}/>
    </div>
  )
}

export default GameArea;