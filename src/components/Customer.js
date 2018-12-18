import React from 'react';
import PropTypes from 'prop-types';

const Customer = (props) => {
    return (
        <div>
            <h2 className="container">Customer: {props.name}</h2>
            <p>Address: {props.address}</p>
        </div>
    );
}
export default Customer;
