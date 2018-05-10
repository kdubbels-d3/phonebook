import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { css } from 'emotion'

const className = css`

`;

const Form = ({ children }) => {
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.target);
    console.log(data);
  }


  return (
    <form className={className}>{children}</form>
  )
};

export default Form;
