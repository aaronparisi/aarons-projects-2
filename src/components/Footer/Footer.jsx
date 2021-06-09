import React from 'react'
import GitHub from '../../icons/github.png'
import LinkedIn from '../../icons/linkedin.png'
import Email from '../../icons/email.png'
import Resume from '../../icons/resume.png'

import Pdf from '../../pdfs/resume_parisi_aaron.pdf'

const Footer = props => {

  return (
    <div className="footer">
      <p>&copy; 2021, Aaron Parisi</p>
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

export default Footer