import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { css } from 'emotion'

const className = css`

`;

const Td = ({children}) => (
  <td className={className}>{children}</td>
);

export default Td;
