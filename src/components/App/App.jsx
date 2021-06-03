import React from 'react';
import { Route } from 'react-router-dom'
import NavBarContainer from '../NavBar/NavBarContainer'
import HeroContainer from '../Hero/HeroContainer';
import AboutContainer from '../About/AboutContainer'

const App = ({ fetchCurrentUser }) => {

  // useEffect(() => {
  //   fetchCurrentUser()
  // }, [fetchCurrentUser])

  return (
    <React.Fragment >      
      <Route path="/" component={NavBarContainer} />
      <Route exact path="/" component={HeroContainer} />
      <Route exact path="/" component={AboutContainer} />
    </React.Fragment>
  );
}

export default App;
