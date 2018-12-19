import React, { Component } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

import Search from './Search';
import Movie from './Movie';


const SEARCH_URL = "http://localhost:3000/movies?query="

class SearchContainer extends Component {
  constructor () {
    super();

    this.state = {
      movies: [],
    };
  }

  searchMovies = (title) => {


    axios.get(SEARCH_URL + title)
    .then((response) => {
      console.log(response.data);
      this.setState({
        movies: response.data
      })
    })
    .catch((error) => {
      console.log('failure response');
      console.log(error);
    });
  }

  render() {
    const movies = this.state.movies
    const moviesList = movies.map((movie) => {
      return <Movie
        key={movie.id}
        title={movie.title}
        image={movie.image_url}
        release={movie.release_date}
        />
    });

    return (
      <div>
        <Search searchCallback={this.searchMovies} />
        <div className="card">
          <ul>
            {moviesList}

          </ul>

        </div>
      </div>
      );
    }

  }

  export default SearchContainer;
