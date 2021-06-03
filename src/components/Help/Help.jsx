import React from 'react';
import { Helmet } from 'react-helmet'

const Help = props => {
  return (
    <React.Fragment >
      <Helmet >
        <title>Help</title>
      </Helmet>
      <h1>Chirper Help</h1>

      <p>
        Get help on the Ruby on Rails Tutorial at the <a href="https://www.railstutorial.org/help" target="_blank" rel="noreferrer">Rails Tutorial Help Page</a>.
        To get help on this sample app, see the <a href="https://www.railstutorial.org/book" target="_blank" rel="noreferrer"><em>Ruby on Rails Tutorial</em> book</a>
      </p>
    </React.Fragment>
  );
}

export default Help;