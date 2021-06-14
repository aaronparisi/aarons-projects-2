import React from 'react';
import HeroImage from '../../images/2-person-workstation.jpeg'
import Bouncer from '../bouncer';

const Home = props => {
  
  return (
    <div className="hero" data-nav="blur">
      <img src={HeroImage} alt="bird's eye view of two people sitting at a home office setup" />

      <div className="hero-text">
        <h1>Web applications even my parents could use.</h1>
        <Bouncer className={"bouncer"} id={"hero-bouncer"} />
      </div>

    </div>
  );
}

export default Home;