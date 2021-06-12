import React, { useState } from 'react'
import styled from 'styled-components';

const StyledSpan = styled.span`
  visibility: ${ ({ visibility }) => visibility};
  margin-left: ${ ({ margin }) => margin }
`

const BlankTile = props => {
  const [termText, setTermText] = useState('')
  const [commands, setCommands] = useState([])

  const handleText = e => {
    e.preventDefault()

    setTermText(e.currentTarget.value)
  }

  const handleSubmit = e => {
    e.preventDefault()

    setCommands([...commands, termText])

    setTermText('')
  }

  return (
    <div className="blank-tile grid-tile">
      <div className="terminal-text">
        <form
          onSubmit={e => handleSubmit(e)}
        >
          <div className="cmdPrompt">$</div>
          <input
            type="text"
            id="cmd-input"
            value={termText}
            placeholder="type something..."
            onChange={e => handleText(e)}
          />
        </form>
        <ul className="prev-commands">
          {
            commands.map((cmd, idx) => {
              return (
                <li className="cmd" key={idx}>
                  <div className="cmdPrompt">$</div>{cmd}
                </li>
              )
            })
          }
        </ul>
        {/* <StyledSpan visibility={cursorVisibility} margin={cursorLeftMargin} id="blinking-cursor">&#9646;</StyledSpan> */}
      </div>
    </div>
  )
}

export default BlankTile