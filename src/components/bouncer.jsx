import React from 'react'

const Bouncer = ({ className, id, href }) => {

  return (
    <div className="scroll-btn-container">
      <a className={className} id={id} href={href}>&or;</a>
      {/* <a id="bouncer-about" href="#projects">&or;</a> */}
    </div>
  )
}

export default Bouncer