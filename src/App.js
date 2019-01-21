import React, { Component } from 'react';
import DiscoveryTemplate from './components/template/disc-template';
import NewsletterSignup from './components/organisms/newsletter';

class App extends Component {
  render() {
    return (
      <div className="App">
        <DiscoveryTemplate footer={<NewsletterSignup />}></DiscoveryTemplate>
      </div>
    );
  }
}

export default App;
