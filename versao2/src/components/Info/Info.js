import React from 'react'

// CSS
import "./Info.css"

const Help = () => {
  return (
    <div id="info">
        <div id="infoText">
            <button id='closeInfo'>x</button>
            <p>If you roll a single 7, congratulations! You'll double your initial bet. It's a good sign of luck, so
                enjoy
                it!</p>
            <p>Now, if you manage to roll two 7s, that's even better! You'll triple your original bet. You're really on
                the
                path of luck now!</p>
            <p>But wait, there's more! If, by chance, you roll three 7s, it's a true stroke of luck! Your initial bet
                will
                be multiplied by 10! That's right, 10 times more! You'll leave this round with a huge smile on your
                face!</p>
            <p>Now, remember, not everything is always perfect. If you don't roll any 7s, well, it's a pity, but you'll
                lose your initial bet. But don't be discouraged, the next round might be your lucky one!</p>
        </div>
    </div>
  )
}

export default Help