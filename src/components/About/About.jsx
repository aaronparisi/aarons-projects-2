import React, { useState, useEffect } from 'react';
import { useOnScreen } from '../../utils/helpers';
import styled from 'styled-components';

import BlurbContainer from './BlurbContainer'
import HeadshotContainer from './HeadshotContainer'
import Bouncer from '../bouncer';

const StyledDiv = styled.div`
  margin-top: ${ ({ margin }) => margin };
  opacity: ${ ({ opacity }) => (opacity !== undefined) ? opacity : '1' };
`

const About = props => {
  const blurbVisibleMargin = '0px';
  const blurbHiddenMargin = '100px'
  const footerVisibleMargin = '0%'
  const footerHiddenMargin = '500px'

  const blurb2Timeout = 500;
  const blurb3Timeout = 1000;
  const footerTimeout = 1500;

  const [bouncerClass, setBouncerClass] = useState('')

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
    const toggleBlurbStates = () => {
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
        }, blurb2Timeout);
  
        setTimeout(() => {
          setBlurb3({
            margin: blurbVisibleMargin,
            overlayOpacity: '0'
          })
        }, blurb3Timeout);
  
        setTimeout(() => {
          setFooterStyles({
            margin: footerVisibleMargin,
            opacity: '1'
          })
        }, footerTimeout);

        setTimeout(() => {
          setBouncerClass('bouncer')
        }, (footerTimeout*2))
  
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
        setBouncerClass('')
      }
    }

    toggleBlurbStates()
  }, [entry.intersectionRatio, animated])
  
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

        <BlurbContainer
          overlayOpacity={blurb1.overlayOpacity}
          top={blurb1.margin}
          text={<p className="blurb-text">It started when I was teaching AP Calculus BC, Multivariable Calculus, and Statistics at <a href="https://www.salisburyschool.org/">Salisbury School</a> on a whiteboard.  Vector integrals are really hard to hand-draw.</p>}
        />

        <BlurbContainer 
          overlayOpacity={blurb2.overlayOpacity} 
          top={blurb2.margin}
          text={<p className="blurb-text">Then I worked a job at a <a href="https://www.1031services.com/">real estate exchange company</a> whose database software had some, er... quirks.  As in, click a link to a client's file and end up at a different client's file... or no client at all!</p>}
        />

        <BlurbContainer  
          overlayOpacity={blurb3.overlayOpacity} 
          top={blurb3.margin}
          text={<p className="blurb-text">Finally it dawned on me - I really want to make software that's easy to use, looks nice, and actually works.  With the help of <a href="https://open.appacademy.io/">appAcademy</a>, now I can do that.</p>}
        />
      </div>

      <div className="about-footer-container">
        <div className="about-footer-flex-container">
            <StyledDiv className="about-footer" margin={footerStyles.margin} opacity={footerStyles.opacity} >
              <h2>Check out some of my projects!</h2>
              <Bouncer className={bouncerClass} id={'about-bouncer'} href={"#projects"} />
            </StyledDiv>
        </div>
      </div>
    </div>
  );
}

export default About;