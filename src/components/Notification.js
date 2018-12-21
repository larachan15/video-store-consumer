import React from 'react';
import PropTypes from 'prop-types';

const Notification = (props) => {
  return (
    <div>
      {props.children}
      <button onClick={props.onClick}>x</button>
    </div>
  )

}

export default Notification;
