import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import Form from '../Form';
import Input from '../Input';
import Button from '../Button';

storiesOf('Form', module)
  .add('Complete Form', () => (
    <Form>
        <div>
          <label for="first-name">First Name: </label>
          <Input id="first-name" name="first-name" type="text" placeholder="First Name" autofocus required />
        </div>
        <div>
          <label for="last-name">Last Name: </label>
          <Input id="last-name" name="last-name" type="text" placeholder="Last Name" required />
        </div>
        <div>
          <label for="num">Phone: </label>
          <Input id="phone" name="phone" type="tel" placeholder="Phone" required />
        </div>
      <Button onClick={action('clicked')}>Submit</Button>
    </Form>
))
