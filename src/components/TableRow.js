import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { css } from 'emotion'

const className = css`

`;

const TableRow = ({children}) => (
  <tr className={className}>{children}</tr>
);

export default TableRow;
