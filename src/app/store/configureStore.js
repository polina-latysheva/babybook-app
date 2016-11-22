import {createStore} from 'redux';
import rootReducer from '../reducers/index.js';

export default function configureStore(initialState) {
  const store = createStore(rootReducer, initialState, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
  return store;
}
