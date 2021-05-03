import { combineReducers } from 'redux';
import pokedex from './pokedex';
import details from './details';

const reducers = combineReducers({
  pokedex,
  details,
});

export default reducers;
