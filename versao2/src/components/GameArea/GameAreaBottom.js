import React from 'react'

const GameAreaBottom = ({onClickPlayBtn, onClickAddCreditsBtn, onClickGiveUpBtn}) => {
  return (
    <div id="gameAreaBottom">
        <button id="insertCredis" onClick={onClickAddCreditsBtn}>Add more credits</button>
        <button id="play" onClick={onClickPlayBtn}>Play</button>
        <button id="giveUp" onClick={onClickGiveUpBtn}>Give Up</button>
    </div>
  )
}

export default GameAreaBottom;