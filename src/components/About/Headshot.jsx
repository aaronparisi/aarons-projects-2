import React from 'react'

import HeadshotPic from "../../images/headshot.png"
import GitHub from '../../icons/github.png'
import LinkedIn from '../../icons/linkedin.png'
import Email from '../../icons/email.png'
import Resume from '../../icons/resume.png'

import Pdf from '../../pdfs/resume_parisi_aaron.pdf'

const Headshot = props => {

  return (
    <div className="headshot-container">
      <img className="headshot" id="headshot" src={HeadshotPic} alt="Headshot of Aaron Parisi"/>
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
        <a className="icon-link" rel="noreferrer" target="_blank" href={Pdf}>
          <img className="icon" src={Resume} alt="resume icon" />
        </a>
      </div>
    </div>
  )
}

export default Headshot