import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Home from './components/Home';
import CustomerData from './components/CustomerData';
import Library from './components/Library';
import SearchContainer from './components/SearchContainer';
import RentalData from './components/RentalData';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBolt } from '@fortawesome/free-solid-svg-icons';

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
      selectedMovieToDisplay: "",
      // selectedCustomerToDisplay: "",
      status: {
        message: '',
      }
    }
  }

  selectMovie = (movie) => {
    console.log(movie.title);
    this.setState({
      selectedMovieToDisplay: movie.title
    })
  }

  setStatus = (message, type) => {
    this.setState({
      status: { message, type }
    });
  }

  clearStatus = () => {
    this.setState({ status: { message: '' }})
  }

  render() {

    return (

      <Router>
        <div className="App">

          <div className="Title">
            <h4>
              <FontAwesomeIcon className="Icon" icon={faBolt}/>
              <FontAwesomeIcon className="Icon" icon={faBolt}/>
              <FontAwesomeIcon className="Icon" icon={faBolt}/>
              Zippy Rentalz
              <FontAwesomeIcon className="Icon" icon={faBolt}/>
              <FontAwesomeIcon className="Icon" icon={faBolt}/>
              <FontAwesomeIcon className="Icon" icon={faBolt}/>
            </h4>



            <div className="Navbar">
              <ul>
                <div className="Links">
                  <li><Link to="/">Home <FontAwesomeIcon icon={faBolt}/></Link></li>

                  <li><Link to="/customer">Customers <FontAwesomeIcon icon={faBolt}/></Link></li>
                  <li><Link to="/library">Library <FontAwesomeIcon icon={faBolt}/></Link></li>
                  <li><Link to="/search">Search <FontAwesomeIcon icon={faBolt}/></Link></li>

                </div>
              </ul>


              <div className="">
                Selected Movie: {this.state.selectedMovieToDisplay}
              </div>
            </div>



            <div className="Lists">

              {/* Routes will go here */}
              <Route path="/" exact={true} component={Home} />
              <Route path="/customer" component={CustomerData} />

              <Route path="/library" component={() => <Library selectMovie={this.selectMovie} />} />
              <Route path="/search" component={SearchContainer} />
            </div>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
