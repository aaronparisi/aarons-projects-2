import React, { useState, useEffect } from 'react';
import { useOnScreen } from '../../utils/helpers';

import Headshot from "../../images/headshot.png"
import GitHub from '../../icons/github.png'
import LinkedIn from '../../icons/linkedin.png'
import Email from '../../icons/email.png'
import Resume from '../../icons/resume.png'
import styled from 'styled-components';

// require('react-dom')
// window.React2 = require('react')
// console.log(window.React1 === window.React2)

// const StyledP = styled.p`
//   margin-top: ${ ({ ratio }) => ratio > 0 ? '0px' : '500px' };
// `
const StyledDiv = styled.div`
  margin-top: ${ ({ margin }) => margin };
`

const About = props => {
  const [blurb1Margin, setBlurb1Margin] = useState('500px')
  const [blurb2Margin, setBlurb2Margin] = useState('500px')
  const [blurb3Margin, setBlurb3Margin] = useState('500px')

  const [ref, entry] = useOnScreen({
    
  })

  useEffect(() => {
    if (entry.intersectionRatio > 0) {
      // * this makes them hit the top at the same time
      setBlurb1Margin('0px')
      setBlurb2Margin('0px')
      setBlurb3Margin('0px')
      
      // * this makes them hit the top separately
      // setBlurb1Margin('0px')
      // setTimeout(() => {
      //   setBlurb2Margin('0px')
      // }, 250);

      // setTimeout(() => {
      //   setBlurb3Margin('0px')
      // }, 500);
    } else {
      // * ... for hitting the top at the same time
      setBlurb1Margin('1000px')
      setBlurb2Margin('2000px')
      setBlurb3Margin('3000px')

      // * ... for hitting the top separately
      // setBlurb1Margin('500px')
      // setBlurb2Margin('500px')
      // setBlurb3Margin('500px')
    }
  })

  return (
    <div className="about" id="about" data-nav="show">
        <div className="about-intro">
          <div className="intro-text">
            <h1>Aaron Parisi</h1>
            <h2>
              I'm a Seattle-based web-developer specializing in intuitive and attractive web applications built with React and Rails.
            </h2>
            <div className="intro-links-container">
              {/* <div className="intro-links-gradient-background"></div> */}
              <div className="intro-links-black-background">
                <div className="intro-links">
                  <a className="icon-link" rel="noreferrer" target="_blank" href="https://www.github.com/aaronparisi">
                    <img className="icon" src={GitHub} alt="GitHub icon" />
                  </a>
                  <a className="icon-link" rel="noreferrer" target="_blank" href="https://www.linkedin.com/in/aaron-parisi">
                    <img className="icon" src={LinkedIn} alt="LinkedIn Icon" />
                  </a>
                  <a className="icon-link" href="mailto:parisi.aaron@gmail.com">
                    <img className="icon" src={Email} alt="email icon" />
                  </a>
                  <a className="icon-link" rel="noreferrer" target="_blank" href="../../pdfs/resume_parisi_aaron.pdf">
                    <img className="icon" src={Resume} alt="resume icon" />
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="headshot-container"><img id="headshot" src={Headshot} alt="Headshot of Aaron Parisi"/></div>
        </div>

        <div className="about-blurbs-container" ref={ref}>
          <div className="about-blurbs-gradient"></div>
          <div className="about-blurbs">
            <StyledDiv margin={blurb1Margin} className="blurb-container">
              <div className="blocker"></div>
              <p>It started when I was teaching AP Calculus BC, Multivariable Calculus, and Statistics at <a href="https://www.salisburyschool.org/">Salisbury School</a> on a whiteboard.  It's hard enough explaining a vector integral without also having to hand-draw it...</p>
              <div className="blocker"></div>
            </StyledDiv>

            <div className="spacer"></div>

            <StyledDiv margin={blurb2Margin} className="blurb-container">
              <div className="blocker"></div>
              <p>Then I worked a job at a <a href="https://www.1031services.com/">real estate exchange company</a> whose database software had some, er, quirks.  Imagine clicking 'like' on your friend's latest facebook photo, only to be unexpectedly taken to your old AIM account...</p>
              <div className="blocker"></div>
            </StyledDiv>

            <div className="spacer"></div>

            <StyledDiv margin={blurb3Margin} className="blurb-container">
              <div className="blocker"></div>
              <p>Finally it dawned on me - I want to make web applications that're easy to use, look nice, and actually work.  With the help of <a href="https://open.appacademy.io/">App Academy Open</a>,
              I've been able to teach myself to do that.</p>
              <div className="blocker"></div>
            </StyledDiv>
          </div>
        </div>
    </div>
  );
}

export default About;