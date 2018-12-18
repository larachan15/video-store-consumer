import React from 'react';
import PropTypes from 'prop-types';

const Movie = (props) => {
  return (
    <div>
      <img src={props.image}
           alt="movie poster"
      />
      <h2>{props.title}</h2>
    </div>
  )
}



export default Movie;
