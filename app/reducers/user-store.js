/*
default:
{
  loggedIn: true/false
  user:{
    email
    uid
  }
}
*/

import {
  REGISTER_USER,
  LOGIN_USER,
  LOGOUT_USER
} from '../actions/authActions';

export function user(state={}, action){
  switch(action.type){
    case REGISTER_USER:
      return Object.assign({}, state, {
        loggedIn: false,
        newUser: true
      })
    case LOGIN_USER:
      return Object.assign({}, state, {
        loggedIn: true,
        username: action.email
      })
    case LOGOUT_USER:
        return Object.assign({}, state, {
          loggedIn: false,
          username: ''
        })
    default:
      return state;
  }
}
