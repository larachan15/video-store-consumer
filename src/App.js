import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Home from './components/Home';
import CustomerData from './components/CustomerData';
import Library from './components/Library';
import SearchContainer from './components/SearchContainer';
import RentalData from './components/RentalData';

import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
  Redirect
} from 'react-router-dom'

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      status: {
        message: '',
      }
    }
  }

  selectMovie = (movie) => {
    console.log(movie.title);
    this.setState({
      movie
    })
  }

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
              <li>Selected Movie: {this.selectMovie} </li>

            </ul>
            {/* Routes will go here */}
            <Route path="/" exact={true} component={Home} />
            <Route path="/customer" component={CustomerData} />
            <Route path="/library" component={() => <Library selectMovie={this.selectMovie} />} />
            <Route path="/search" component={SearchContainer} />



          </div>
        </div>
      </Router>
    );
  }
}

export default App;
