import React from 'react';
import { storiesOf } from '@storybook/react';
import Success from './';

storiesOf('Discovery Test/Atoms/Success', module)
  .add('Success Message', () => (
    <Success>The quick brown fox jumps over the lazy dog</Success>
  ));