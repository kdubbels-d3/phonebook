import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { css } from 'emotion'

const className = css`

`;

const Th = ({children}) => (
  <th className={className}>{children}</th>
);

export default Th;
