import React, { Component } from 'react';
import Router from '../Components/Router';
import GlobalStyles from './GlobalStyles';

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Router />
        <GlobalStyles />
      </React.Fragment>
    );
  }
}

export default App;
