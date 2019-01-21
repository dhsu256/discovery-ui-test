import React from 'react';
import { configure, addDecorator } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { Provider } from 'react-redux'
import store from '../src/redux/store'
import '../src/index.css'

// automatically import all files ending in *.stories.js
const req = require.context('../src/', true, /.stories.js$/);
function loadStories() {
  req.keys().forEach(filename => req(filename));
}


addDecorator((story) => (
  <Provider store={store}>
    {story()}
  </Provider>
));

configure(loadStories, module);