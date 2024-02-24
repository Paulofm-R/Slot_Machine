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

const GameAreaMid = ({numbers, setHasFinished}) => {
  const [animationSlot1, setAnimationSlot1] = useState(false);
  const [animationSlot2, setAnimationSlot2] = useState(false);
  const [animationSlot3, setAnimationSlot3] = useState(false);
  const [showSlot1, setShowSlot1] = useState(false);
  const [showSlot2, setShowSlot2] = useState(false);
  const [showSlot3, setShowSlot3] = useState(false);
  

    const renderImage = (number) => {
      if (number !== undefined) {
        const image = Imagens[number];
        return <img src={image} alt={`Image ${number}`} style={{ width: '80%', height: '80%' }}/>
      }
      return;
    }

  useEffect(() => {
    if (numbers.length > 0) {
      setShowSlot1(false);
      setShowSlot2(false);
      setShowSlot3(false);
      setHasFinished(false)

      setTimeout(() => {
        setAnimationSlot1(true);
      }, 150)
      setTimeout(() => {
        setAnimationSlot2(true);
      }, 300)
      setTimeout(() => {
        setAnimationSlot3(true);
      }, 450)
  
      setTimeout(() => {
        setAnimationSlot1(false);
        setShowSlot1(true)
      }, 2600);
      setTimeout(() => {
        setAnimationSlot2(false);
        setShowSlot2(true)
      }, 4200);
      setTimeout(() => {
        setAnimationSlot3(false);
        setShowSlot3(true);
        setHasFinished(true);
      }, 5800);
    }
    }, [numbers])

  return (
    <div id='GameAreaMid'>
        <div id="slot1" className="slot">
          {animationSlot1 && <div className="slotMachine"></div>}
          {showSlot1 && renderImage(numbers[0])}
        </div>
        <div id="slot2" className="slot">
          {animationSlot2 && <div className="slotMachine"></div>}
          {showSlot2 && renderImage(numbers[1])}
        </div>
        <div id="slot3" className="slot">
          {animationSlot3 && <div className="slotMachine"></div>}
          {showSlot3 && renderImage(numbers[2])}
        </div>
    </div>
  )
}

export default GameAreaMid