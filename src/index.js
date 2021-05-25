import React from 'react';
import ReactDOM from 'react-dom';
import App from './containers/App/app';
import * as serviceWorker from './serviceWorker';

const MOUNT_NODE = document.getElementById('root');

const app = (
  <App />
);

ReactDOM.render(app, MOUNT_NODE);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
