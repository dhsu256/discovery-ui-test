import React from 'react';
import { storiesOf } from '@storybook/react';
import ErrorMessage from './';

storiesOf('Discovery Test/Atoms/Error Message', module)
  .add('Error Message Alone', () => (
    <ErrorMessage>Error</ErrorMessage>
  ))
  .add('Error Message with input', () => (
    <div style={{position:'relative', display:'inline-block', margin:'25px 0px'}}>
      <input type="text" value="test input" style={{width:'100px',height:'30px'}}/>
      <ErrorMessage>Error</ErrorMessage>
    </div>
  ));