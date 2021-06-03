import React from 'react';
import Headshot from "../../images/headshot.png"

const About = props => {
  return (
    <div className="about" id="about" data-dark={true}>
        <header className="about-header">
          <h1>Aaron Parisi</h1>
          <h2>I'm a web developer based in Seattle, WA,</h2>
          <h2>specializing in Rails + React development.</h2>
        </header>

        <div className="about-content" id="about-content">
          <div className="about-text">
            <p>
              It started when I was teaching AP Calculus BC, Multivariable Calculus, and Statistics at <a href="https://www.salisburyschool.org/">Salisbury School</a> on a whiteboard...
            </p>
            <p>
              Then I worked a job at a <a href="https://www.1031services.com/">real estate exchange company</a> whose database software had some... quirks...
            </p>
            <p>
              Finally it dawned on me - I want to make web applications that're easy to use, that actually work, and that *gasp* look nice.  With the help of <a href="https://open.appacademy.io/">App Academy Open</a>,
              I've been able to teach myself to do that.
            </p>
          </div>
          <div className="headshot-container"><img id="headshot" src={Headshot} alt="Headshot of Aaron Parisi"/></div>
        </div>
    </div>
  );
}

export default About;