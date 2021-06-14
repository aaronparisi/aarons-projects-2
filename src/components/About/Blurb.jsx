import React, { useEffect, useRef, useState } from 'react'
import styled from 'styled-components';

import { useWinWidth } from '../../utils/helpers';

const ContainerDiv = styled.div`
  top: ${ ({ top }) => top };
`

const BlockerDiv = styled.div`
  opacity: ${ ({ opacity }) => opacity };
  z-index: ${ ({ opacity}) => (opacity === '1' ? '1' : '-3') };
`

const HeightDiv = styled.div`
  height: ${ ({ height }) => height }px;
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
    <HeightDiv className="blurb-container" height={containerHeight}>
      <ContainerDiv className="blurb" top={top}>
        <HeightDiv className="blurb-contents-container" height={containerHeight}>
          <div ref={blurbRef}>{text}</div>
          <BlockerDiv opacity={overlayOpacity} className="blurb-blocker"></BlockerDiv>
        </HeightDiv>
      </ContainerDiv>
    </HeightDiv>
  )
}

export default Blurb