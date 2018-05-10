import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import Input from '../Input';

storiesOf('Input', module)
  .add('Input with block', () => (
    <div>
      <Input block placeholder="Input" name="foo" aria-label="Input" onChange={action('typed')}/>
    </div>
  ))
  .add('Input without block', () => (
    <div>
      <Input placeholder="Input" name="foo" aria-label="Input" onChange={action('typed')} />
    </div>
  ));
