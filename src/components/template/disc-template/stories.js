import React from 'react';
import { storiesOf } from '@storybook/react';
import DiscoveryTemplate from './';
import './style_storybook.css';

storiesOf('Discovery Test/Templates/Discovery template', module)
  .add('Page Template', () => (
      <DiscoveryTemplate 
        header={<div className="header">Header</div>} 
        main={<div className="main">Main</div>} 
        footer={<div className="footer">Footer</div>}  />
  ))