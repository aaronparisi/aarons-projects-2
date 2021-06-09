import React, { useState, useEffect } from 'react';
import { useOnScreen } from '../../utils/helpers';
import styled from 'styled-components';

import BlurbContainer from './BlurbContainer'
import HeadshotContainer from './HeadshotContainer'

const StyledDiv = styled.div`
  margin-top: ${ ({ margin }) => margin };
  opacity: ${ ({ opacity }) => (opacity !== undefined) ? opacity : '1' };
`

const About = props => {
  const blurbVisibleMargin = '10px';
  const blurbHiddenMargin = '100px'
  const footerVisibleMargin = '4vh'
  const footerHiddenMargin = '500px'

  const [blurb1, setBlurb1] = useState({
    margin: blurbHiddenMargin,
    overlayOpacity: '1'
  })
  const [blurb2, setBlurb2] = useState({
    margin: blurbHiddenMargin,
    overlayOpacity: '1'
  })
  const [blurb3, setBlurb3] = useState({
    margin: blurbHiddenMargin,
    overlayOpacity: '1'
  })

  const [footerStyles, setFooterStyles] = useState({
    margin: footerHiddenMargin,
    opacity: '0'
  })

  const [animated, setAnimated] = useState(false)

  const [ref, entry] = useOnScreen({
    
  })

  useEffect(() => {
    if (animated) return;

    if (entry.intersectionRatio > 0) {
      setBlurb1({
        margin: blurbVisibleMargin,
        overlayOpacity: '0'
      })

      setTimeout(() => {
        setBlurb2({
          margin: blurbVisibleMargin,
          overlayOpacity: '0'
        })
      }, 250);

      setTimeout(() => {
        setBlurb3({
          margin: blurbVisibleMargin,
          overlayOpacity: '0'
        })
      }, 500);

      setTimeout(() => {
        setFooterStyles({
          margin: footerVisibleMargin,
          opacity: '1'
        })
      }, 750);

      // setAnimated(true)  // * uncomment to limit animation to 1 time
    } else {
      // ! if we only animate one time this else condition is unnecessary
      setBlurb1({
        margin: blurbHiddenMargin,
        overlayOpacity: '1'
      })
      setBlurb2({
        margin: blurbHiddenMargin,
        overlayOpacity: '1'
      })
      setBlurb3({
        margin: blurbHiddenMargin,
        overlayOpacity: '1'
      })
      setFooterStyles({
        margin: footerHiddenMargin,
        opacity: '0'
      })
    }
  }, [entry.intersectionRatio])
  
  return (
    <div className="about" id="about" data-nav="show">
      <div className="about-intro">
        <div className="intro-text">
          <h1>Aaron Parisi</h1>
          <h2>
            I'm a Seattle-based web-developer specializing in intuitive and attractive web applications built with React and Rails.
          </h2>
        </div>
        <HeadshotContainer />
      </div>

      <div className="about-blurbs-container" ref={ref}>
        <div className="about-blurbs-gradient"></div>
        <div className="about-blurbs">
          <StyledDiv className="blurb-container" margin={blurb1.margin} >
            <BlurbContainer
              overlayOpacity={blurb1.overlayOpacity} 
              text={<p>It started when I was teaching AP Calculus BC, Multivariable Calculus, and Statistics at <a href="https://www.salisburyschool.org/">Salisbury School</a> on a whiteboard.  It's hard enough explaining a vector integral without also having to hand-draw it...</p>}
            />
          </StyledDiv>

          <div className="spacer"></div>

          <StyledDiv className="blurb-container" margin={blurb2.margin} >
            <BlurbContainer 
              overlayOpacity={blurb2.overlayOpacity} 
              text={<p>Then I worked a job at a <a href="https://www.1031services.com/">real estate exchange company</a> whose database software had some, er, quirks.  Imagine clicking 'like' on your friend's latest facebook photo, only to be unexpectedly taken to your old AIM account...</p>}
            />
          </StyledDiv>

          <div className="spacer"></div>

          <StyledDiv className="blurb-container" margin={blurb3.margin} >
            <BlurbContainer  
              overlayOpacity={blurb3.overlayOpacity} 
              text={<p>Finally it dawned on me - I really like making software that's easy to use, looks nice, and actually works.  With the help of <a href="https://open.appacademy.io/">App Academy Open</a>, I've been able to teach myself to do that.</p>}
            />
          </StyledDiv>

        </div>
      </div>

      <StyledDiv className="about-footer" margin={footerStyles.margin} opacity={footerStyles.opacity} >
        <h2>Check out some of my projects!</h2>
        <div className="scroll-btn-container">
          {/* <a className="bouncer" id="bouncer-about" href="#projects">&or;</a> */}
          <a id="bouncer-about" href="#projects">&or;</a>
        </div>
      </StyledDiv>
    </div>
  );
}

export default About;