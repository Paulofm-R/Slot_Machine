import React from 'react'
import { useState, useEffect } from 'react'

import num0 from '../../img/num0.png'
import num1 from '../../img/num1.png'
import num2 from '../../img/num2.png'
import num3 from '../../img/num3.png'
import num4 from '../../img/num4.png'
import num5 from '../../img/num5.png'
import num6 from '../../img/num6.png'
import num7 from '../../img/num7.png'
import num8 from '../../img/num8.png'
import num9 from '../../img/num9.png'

const Imagens = {
    0: num0,
    1: num1,
    2: num2,
    3: num3,
    4: num4,
    5: num5,
    6: num6,
    7: num7,
    8: num8,
    9: num9,
  };

const GameAreaMid = ({numbers}) => {
    const renderImage = (number, timer) => {
        console.log(timer);
        setTimeout(() => {
            
            
        }, timer)

        const image = Imagens[number];
        return <img src={image} alt={`Image ${number}`} />
    }

  return (
    <div id='GameAreaMid'>
        <div id="num1" className="numArea">{renderImage(numbers[0], 2000)}</div>
        <div id="num2" className="numArea">{renderImage(numbers[1], 4000)}</div>
        <div id="num3" className="numArea">{renderImage(numbers[2], 6000)}</div>
    </div>
  )
}

export default GameAreaMid