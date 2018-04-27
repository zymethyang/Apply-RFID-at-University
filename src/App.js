import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from './components/header';
import Home from './pages/Home';
import ListEvents from './pages/ListEvents';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Header />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/events" component={ListEvents} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
