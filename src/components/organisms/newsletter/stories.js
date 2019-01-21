import React from 'react';
import { storiesOf } from '@storybook/react';
import NewsletterSignup from './';

storiesOf('Discovery Test/Organisms/Newsletter', module)
  .add('Full Newsletter Sign up', () => (
      <NewsletterSignup />
  ))