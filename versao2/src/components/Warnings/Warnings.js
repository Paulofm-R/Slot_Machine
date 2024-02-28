import React from 'react'

// CSS
import './Warnings.css';

const Warnings = ({ msg }) => {
  return (
    <div id="warnings">{msg}</div>
  )
}

export default Warnings