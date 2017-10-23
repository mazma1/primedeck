import React from 'react';
import ReactDOM from 'react-dom';
import App from '../client/src/components/App';
import './src/static/css/style.css';


if (module.hot) {
  module.hot.accept();
}

ReactDOM.render(<App />, document.getElementById('app'));
