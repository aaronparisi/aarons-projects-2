import React from 'react';
import { Route } from 'react-router-dom'
import NavBarContainer from '../NavBar/NavBarContainer'
import HeroContainer from '../Hero/HeroContainer';
import AboutContainer from '../About/AboutContainer'
import Logo from '../NavBar/Logo';
import ProjectsContainer from '../Projects/ProjectsContainer';
import ContactContainer from '../Contact/ContactContainer'
import FooterContainer from '../Footer/FooterContainer'

const App = ({ fetchCurrentUser }) => {

  // useEffect(() => {
  //   fetchCurrentUser()
  // }, [fetchCurrentUser])

  return (
    <React.Fragment >
      <Route path="/" component={Logo} />
      <Route path="/" component={NavBarContainer} />
      <Route exact path="/" component={HeroContainer} />
      <Route exact path="/" component={AboutContainer} />
      <Route exact path="/" component={ProjectsContainer}/>
      <Route exact path="/" component={ContactContainer} />
      <Route exact path="/" component={FooterContainer} />
    </React.Fragment>
  );
}

export default App;
