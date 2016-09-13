import 'babel-polyfill';

import React from 'react';
import {render} from 'react-dom';
import {Provider} from 'react-redux';
import App from './app/containers/App.js';
import Events from './app/containers/Events.js';
import configureStore from './app/store/configureStore.js';
import {Router, Route, browserHistory} from 'react-router';

import 'todomvc-app-css/index.css!';

const store = configureStore();

render(
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" component={App}/>
      <Route path="/events" component={Events}/>
    </Router>
  </Provider>,
  document.getElementById('root')
);
