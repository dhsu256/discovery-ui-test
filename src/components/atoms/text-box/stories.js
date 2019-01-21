import React from 'react';
import { storiesOf } from '@storybook/react';
import Input from './';

storiesOf('Discovery Test/Atoms/Text Box', module)
  .add('Input text box', () => (
    <Input id="demo" />
  )).add('Input text box', () => (
    <Input id="demo" />
  )).add('Input text box with placeholder', () => (
    <Input id="demo" placeholder="Demo Placeholder" />
  ));