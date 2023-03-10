import { combineReducers } from 'redux';
import { apiReducers } from '../api/apiReducers';

const rootReducer = combineReducers({
  ...apiReducers,
});

export default rootReducer;
