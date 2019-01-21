import React from 'react';
import { storiesOf } from '@storybook/react';
import Button from './';

storiesOf('Discovery Test/Atoms/Button', module)
  .add('Type Button', () => (
    <Button type="button">Button</Button>
  ))
  .add('Type Submit', () => (
    <Button type="Submit">Submit</Button>
  ))
  .add('Type Reset', () => (
    <Button type="Reset">Reset</Button>
  ));