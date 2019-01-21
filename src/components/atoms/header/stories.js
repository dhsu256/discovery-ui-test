import React from 'react';
import { storiesOf } from '@storybook/react';
import Header from './';

storiesOf('Discovery Test/Atoms/Header', module)
  .add('Standard Header', () => (
    <Header>The quick brown fox jumps over the lazy dog</Header>
  ));