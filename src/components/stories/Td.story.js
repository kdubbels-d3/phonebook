import React from 'react';
import { storiesOf } from '@storybook/react';
import Td from '../Td';

storiesOf('Td', module)
  .add('Td', () => (
    <Td>Foo bar</Td>
  ));