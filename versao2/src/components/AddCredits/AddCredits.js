import React from 'react'
import { useState } from 'react';

// CSS
import './AddCredits.css';

const AddCredits = ({toAddCredits, cancelMoreCredits}) => {
  const [displayValue, setDisplayValue] = useState(0);

  const handleButtonClick = (value) => {
    let newValue = displayValue + value

    if (newValue < 0) 
      newValue = 0;

    setDisplayValue(newValue);
  }


  return (
    <div id="insertCredits">
      <p>Insert more Credits</p>
        <div id="panel">
            <div id="display">
                {displayValue}€
            </div>
            <div id="panelButtons">
                <div className="panelButtons" onClick={() => handleButtonClick(1)}> + 1€ </div>
                <div className="panelButtons" onClick={() => handleButtonClick(2)}> + 2€ </div>
                <div className="panelButtons" onClick={() => handleButtonClick(5)}> + 5€ </div>
                <div className="panelButtons" onClick={() => handleButtonClick(10)}> + 10€ </div>
                <div className="panelButtons" onClick={() => handleButtonClick(-1)}> - 1€ </div>
                <div className="panelButtons" onClick={() => handleButtonClick(-2)}> - 2€ </div>
                <div className="panelButtons" onClick={() => handleButtonClick(-5)}> - 5€ </div>
                <div className="panelButtons" onClick={() => handleButtonClick(-10)}> - 10€ </div>
            </div>
            <div id="buttons">
                <button id="addCredits" onClick={() => toAddCredits(displayValue)}>To Add</button>
                <button id="insertCreditsCancel" onClick={cancelMoreCredits}>Cancel</button>
            </div>
        </div>
    </div>
  )
}

export default AddCredits