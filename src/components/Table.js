import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { css } from 'emotion'

const className = css`
  border-collapse: separate;
  border-spacing: 0;
  width: 100%;
`;

const Table = ({children}) => (
  <table className={className}>{children}</table>
);

export default Table;
