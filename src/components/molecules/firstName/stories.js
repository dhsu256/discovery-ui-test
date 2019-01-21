import React from 'react';
import { storiesOf } from '@storybook/react';
import FirstName from './';

storiesOf('Discovery Test/Molecules/First Name', module)
  .add('First name Text Box', () => (
      <FirstName />
  ))