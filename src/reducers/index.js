import {combineReducers} from 'redux';
import {conditions} from './condition-store';
import {user} from './user-store';
import {routerStateReducer as router} from 'redux-router'


const rootReducer = combineReducers({
  conditions,
  user,
  router
})

export default rootReducer
