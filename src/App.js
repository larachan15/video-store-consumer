import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Home from './components/Home';
import Customer from './components/Customer';
import Library from './components/Library';
import Search from './components/Search';

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
              <li><Link to="/">Home</Link></li>
              <li><Link to="/customer">Customers</Link></li>
              <li><Link to="/library">Library</Link></li>
              <li><Link to="/search">Search</Link></li>
            </ul>
            {/* Routes will go here */}
            <Route path="/" exact={true} component={Home} />
            <Route path="/customer" component={Customer} />
            <Route path="/library" component={Library} />
            <Route path="/search" component={Search} />
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
