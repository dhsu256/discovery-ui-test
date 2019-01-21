import React from 'react';
import { storiesOf } from '@storybook/react';
import SuccessSubtext from './';

storiesOf('Discovery Test/Atoms/Success Sub Text', module)
  .add('Success Sub Text Message', () => (
    <SuccessSubtext>The quick brown fox jumps over the lazy dog</SuccessSubtext>
  ));