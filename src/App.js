import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Customer from './components/Customer';

import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
  Redirect
} from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <div className="container">
            <ul>
              <li><a href="">Customers</a></li>
            </ul>
            {/* Routes will go here */}
            <Route path="/customer" component={Customer} />
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
