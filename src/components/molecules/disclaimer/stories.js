import React from 'react';
import { storiesOf } from '@storybook/react';
import Disclaimer from './';

storiesOf('Discovery Test/Molecules/DIsclaimer', module)
  .add('Disclaimer Checkbox and text', () => (
    <Disclaimer id="demo">The quick brown fox jumps over the lazy dog</Disclaimer>
  ))