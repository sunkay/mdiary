
/*
default:
{
  users:{
    TBD
  }
}
*/

import {
  REGISTER_USER,
} from '../actions/authActions';

export function users(state={}, action){
  switch(action.type){
    case REQUEST_USERS:
      return Object.assign({}, state, {
          isFetching: true
        })
    case RECEIVE_USERS:
      return Object.assign({}, state, {
        isFetching: false,
        items: action.users,
        lastUpdated: action.receivedAt
      })
    case REGISTER_USER:
    case LOGIN_USER:
    default:
      return state;
  }
}
