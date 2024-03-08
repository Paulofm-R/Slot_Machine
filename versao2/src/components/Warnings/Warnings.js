import React from 'react'

// CSS
import './Warnings.css';

const Warnings = ({ props }) => {
  const { msg, win } = props;

  return (
    <div id="warnings" className={win ? 'win_warnings' : ''}>{msg}</div>
  )
}

export default Warnings