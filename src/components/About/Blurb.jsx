import React, { useEffect, useRef, useState } from 'react'
import styled from 'styled-components';

import { useWinWidth } from '../../utils/helpers';

const ContainerDiv = styled.div`
  top: ${ ({ top }) => top };
  height: ${ ({ elHeight }) => elHeight }px;
`

const BlockerDiv = styled.div`
  opacity: ${ ({ opacity }) => opacity };
  z-index: ${ ({ opacity}) => (opacity === '1' ? '1' : '-3') };
`

const Blurb = ({ overlayOpacity, text, top }) => {
  const [containerHeight, setContainerHeight] = useState(0)
  const blurbRef = useRef()
  const winWidth = useWinWidth()

  useEffect(() => {
    const child = blurbRef.current
    setContainerHeight(child.offsetHeight)
    console.log('set container height')
  }, [text])
  
// todo there are LOT of renders on reload
  useEffect(() => {
    const child = blurbRef.current
    setContainerHeight(child.offsetHeight)
  }, [winWidth, containerHeight])

  console.log('rendering')
  return (
    <ContainerDiv className="blurb-container" elHeight={containerHeight}>
      <ContainerDiv className="blurb" top={top} elHeight={containerHeight}>
        <ContainerDiv className="blurb-contents-container" elHeight={containerHeight}>
          <div ref={blurbRef}>{text}</div>
          <BlockerDiv opacity={overlayOpacity} className="blurb-blocker"></BlockerDiv>
        </ContainerDiv>
      </ContainerDiv>
    </ContainerDiv>
  )
}

export default Blurb