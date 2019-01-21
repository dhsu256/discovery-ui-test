import React from 'react';
import { storiesOf } from '@storybook/react';
import SignupForm from './';

storiesOf('Discovery Test/Molecules/Form', module)
  .add('Form Sign up', () => (
      <SignupForm />
  ))