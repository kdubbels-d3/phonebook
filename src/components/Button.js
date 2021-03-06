import React, { Component } from 'react';
import PropTypes from 'prop-types';

const buttonStyles = {
  border: '1px solid #eee',
  borderRadius: 3,
  backgroundColor: '#fff',
  cursor: 'pointer',
  fontSize: 15,
  padding: '3px 10px',
  margin: 10
}

const Button = ({ children, onClick }) => (
  <button
    style={buttonStyles}
    onClick={onClick}
  >
    {children}
  </button>
);

Button.propTypes = {
  children: PropTypes.string,
  onClick: PropTypes.func,
}

export default Button;
