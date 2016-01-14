import {combineReducers} from 'redux';
import {conditions} from './condition-store';
import {user} from './user-store';
import {message} from './message-store';
import { routeReducer } from 'redux-simple-router'


const rootReducer = combineReducers({
  conditions,
  user,
  message,
  routing: routeReducer
})

export default rootReducer
