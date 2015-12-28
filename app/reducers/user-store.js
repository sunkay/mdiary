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

import { UPDATE_PATH } from 'redux-simple-router';

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
    case UPDATE_PATH:
      console.log("Change the path to: ", action.payload.path, action.payload.state);

    default:
      return state;
  }
}
