import React from 'react';
import PropTypes from 'prop-types';

const Movie = (props) => {
  return (
    <div>
      <h2>{props.title}</h2>
      <p>{props.release}</p>
      <img src={props.image}
           alt="movie poster"
      />
      <p>{props.overview}</p>

    </div>
  )
}



export default Movie;
