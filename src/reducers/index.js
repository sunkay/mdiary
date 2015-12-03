import {combineReducers} from 'redux';
import {conditions} from './condition-store';
import {user} from './user-store';


export default combineReducers({
  conditions,
  user
})
