import React from 'react';
import { storiesOf } from '@storybook/react';
import lastName from './';

storiesOf('Discovery Test/Molecules/Last Name', module)
  .add('Last Name Text Box', () => (
      <lastName />
  ))