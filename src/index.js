import 'babel-polyfill';

import React from 'react';
import {render} from 'react-dom';
import {Provider} from 'react-redux';
import Events from './app/containers/Events.js';
import configureStore from './app/store/configureStore.js';
import {Router, Route, browserHistory} from 'react-router';
import 'todomvc-app-css/index.css!';

const db = window.firebase.database();
db.ref('/events').once('value').then(snapshot => {
  const eventArray = snapshot.val();
  const state = {
    events: {
      events: eventArray,
      selectedEvent: eventArray[0]
    }
  };

  const store = configureStore(state);

  render(
    <Provider store={store}>
      <Router history={browserHistory}>
        <Route path="/events" component={Events}/>
      </Router>
    </Provider>,
    document.getElementById('root')
  );
});
