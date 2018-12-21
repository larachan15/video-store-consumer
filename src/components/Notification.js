import React from 'react';
import PropTypes from 'prop-types';
import './Notification.css';

const Notification = (props) => {
  return (
    <div>
      {props.children}
      <button className= "checkout_button" onClick={props.onClick}>x</button>
    </div>
  )

}

export default Notification;
