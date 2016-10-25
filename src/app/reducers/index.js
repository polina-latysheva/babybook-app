import {combineReducers} from 'redux';
import todos from './todos.js';
import events from './events.js';

const rootReducer = combineReducers({
  events,
  todos
});

export default rootReducer;
