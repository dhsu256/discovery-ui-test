import React from 'react';
import { storiesOf } from '@storybook/react';
import DiscoveryTemplate from '../../template/disc-template';
import NewsletterSignup from '../../organisms/newsletter';
import './style.css';

storiesOf('Discovery Test/Page/Newsletter for Footer with Page Template', module)
  .add('Page Template', () => (
      <DiscoveryTemplate 
        header={<div className="header">Header</div>} 
        main={<div className="main">Main</div>} 
        footer={<NewsletterSignup />}  />
  ))