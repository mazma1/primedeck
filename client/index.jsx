import React from 'react';
import ReactDOM from 'react-dom';
import App from '../client/src/components/App';

require('./src/style.css');

if (module.hot) {
  module.hot.accept();
}

ReactDOM.render(<App />, document.getElementById('app'));
