import React, { Component } from 'react';
import LoginContainer from './LoginContainer.jsx';
import SignupContainer from './SignupContainer.jsx';
import ApiContainer from './ApiContainer.jsx';

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';

function App(props) {
  return (
    <Router>
      <Switch>
        <Route path="/signup">
          <SignupContainer />
        </Route>
        <Route path="/api">
          <ApiContainer />
        </Route>
        <Route path="/">
          <LoginContainer />
        </Route>
      </Switch>
    </Router>
  )
}

export default App;