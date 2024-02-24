import React from 'react'
import { BsInfoLg } from "react-icons/bs";

const GameAreaBottom = ({onClickPlayBtn, onClickAddCreditsBtn, onClickGiveUpBtn, onClickInfosBtn, hasFinished}) => {
  return (
    <div id="gameAreaBottom">
        <button id="infoBtn" onClick={onClickInfosBtn}><BsInfoLg /></button>
        <button id="insertCredis" onClick={onClickAddCreditsBtn}>Add more credits</button>
        <button id="play" onClick={onClickPlayBtn} disabled={!hasFinished}>Play</button>
        <button id="giveUp" onClick={onClickGiveUpBtn}>Give Up</button>
    </div>
  )
}

export default GameAreaBottom;