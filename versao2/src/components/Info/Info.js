import React from 'react'

import num7 from '../../img/num7.png'
import num1 from '../../img/num1.png'
import num2 from '../../img/num2.png'


// CSS
import "./Info.css"

const Info = ({info}) => {
  return (
    <div id="info">
      <div id="infoText">
        <button id='closeInfo' onClick={() => info(false)}>x</button>
        <p>If a 7 rolls:</p>
        <div className="imagesInfo">
          <div className="slotInfo">
            <img src={num7} alt={`Image info 7`} style={{ width: '55px' }} />
          </div>
          <div className="slotInfo">
            <img src={num1} alt={`Image info 1`} style={{ width: '80px' }} />
          </div>
          <div className="slotInfo">
            <img src={num2} alt={`Image info 2`} style={{ width: '77px' }} />
          </div>
          <div className='premiumInfo'>
            = x2
          </div>
        </div>
        <p>If two 7s come up:</p>
        <div className="imagesInfo">
          <div className="slotInfo">
            <img src={num7} alt={`Image info 7`} style={{ width: '55px' }} />
          </div>
          <div className="slotInfo">
            <img src={num7} alt={`Image info 7`} style={{ width: '55px' }} />
          </div>
          <div className="slotInfo">
            <img src={num2} alt={`Image info 2`} style={{ width: '77px' }} />
          </div>
          <div className='premiumInfo'>
            = x3
          </div>
        </div>
        <p>If three 7s come up:</p>
        <div className="imagesInfo">
          <div className="slotInfo">
            <img src={num7} alt={`Image info 7`} style={{ width: '55px' }} />
          </div>
          <div className="slotInfo">
            <img src={num7} alt={`Image info 7`} style={{ width: '55px' }} />
          </div>
          <div className="slotInfo">
            <img src={num7} alt={`Image info 7`} style={{ width: '55px' }} />
          </div>
          <div className='premiumInfo'>
            = x10
          </div>
        </div>
        <p>If no 7 comes out:</p>
        <div className="imagesInfo">
          <div className="slotInfo">
            <img src={num2} alt={`Image info 2`} style={{ width: '77px' }} />
          </div>
          <div className="slotInfo">
            <img src={num1} alt={`Image info 1`} style={{ width: '80px' }} />
          </div>
          <div className="slotInfo">
            <img src={num2} alt={`Image info 2`} style={{ width: '77px' }} />
          </div>
          <div className='premiumInfo'>
            = -x*
          </div>
        </div>
        <span className='spanInfo'>* this x represents the amount bet</span>
      </div>
    </div>
  )
}

export default Info