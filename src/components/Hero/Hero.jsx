import React from 'react';
import HeroImage from '../../images/2-person-workstation.jpeg'

const Home = props => {
  
  return (
    <div className="hero" data-nav="blur">
      <img src={HeroImage} alt="bird's eye view of two people sitting at a home office setup" />

      <div className="hero-text">
        <h1>Web applications even my parents could use.</h1>
        <div className="scroll-btn-container">
          <a className="bouncer" href="#about">&or;</a>
        </div>
      </div>

    </div>
  );
}

export default Home;