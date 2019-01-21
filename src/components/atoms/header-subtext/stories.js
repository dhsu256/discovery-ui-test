import React from 'react';
import { storiesOf } from '@storybook/react';
import HeaderSubtext from './';

storiesOf('Discovery Test/Atoms/Header Sub Text', module)
  .add('Standard Header Sub text', () => (
    <HeaderSubtext>The quick brown fox jumps over the lazy dog</HeaderSubtext>
  ));