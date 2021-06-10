import React from 'react'

const BlankTile = props => {

  return (
    <div className="blank-tile grid-tile">
      <div className="terminal-text">
        $<span id="blinking-cursor">&#9646;</span>
      </div>
    </div>
  )
}

export default BlankTile