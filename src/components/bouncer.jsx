import React from 'react'

const Bouncer = ({ className, id }) => {

  return (
    <div className="scroll-btn-container">
      <a className={className} id={id} href="#projects">&or;</a>
      {/* <a id="bouncer-about" href="#projects">&or;</a> */}
    </div>
  )
}

export default Bouncer