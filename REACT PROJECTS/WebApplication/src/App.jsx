// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import SignUp from './pages/SignUp';
import UserProfiles from './pages/UserProfiles';
import UserProfileDetail from './pages/UserProfileDetail';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={SignUp} />
        <Route path="/profiles" component={UserProfiles} />
        <Route path="/user/:id" component={UserProfileDetail} />
      </Switch>
    </Router>
  );
};

export default App;