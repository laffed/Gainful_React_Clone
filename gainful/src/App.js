import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Home from './containers/Home'
import Registration from './containers/Registration'
import Quiz from './containers/Quiz';

function App() {

  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/registration" component={Registration} />
          <Route exact path="/quiz" component={Quiz} />
        </Switch>
      </div>
    </Router>
  )
}

export default App;
