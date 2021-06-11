import React from 'react'
import styled from 'styled-components';

const BlockerDiv = styled.div`
  opacity: ${ ({ opacity }) => opacity };
  z-index: ${ ({ opacity}) => (opacity === '1' ? '1' : '-3') };
`

const Blurb = ({ overlayOpacity, text }) => {
  return (
    <React.Fragment>
      <div className="blurb-body">
        <BlockerDiv opacity={overlayOpacity} className="overlay"></BlockerDiv>
        {text}
      </div>
    </React.Fragment>
  )
}

export default Blurb