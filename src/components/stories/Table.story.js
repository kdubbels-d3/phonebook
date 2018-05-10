import React from 'react';
import { storiesOf } from '@storybook/react';
import Table from '../Table';
import Th from '../Th';
import Td from '../Td';
import TableRow from '../TableRow';

storiesOf('Table', module)
  .add('Table', () => (
    <Table></Table>
  ))
  .add('Full Table', () => (
    <Table>
      <thead>
        <TableRow><Th>foo</Th><Th>bar</Th></TableRow>
      </thead>
      <tbody>
        <TableRow><Td>foo</Td><Td>bar</Td></TableRow>
        <TableRow><Td>foo</Td><Td>bar</Td></TableRow>
      </tbody>
    </Table>
  ));
