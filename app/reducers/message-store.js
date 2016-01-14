/*
default:
{
  error:{
    messageType: "Login",
    message: "invalid email"
  }
}
*/
import {
  SHOW_ERROR,
  HIDE_ERROR
} from '../constants';

export function message(state={}, action){
  switch(action.type){
    case SHOW_ERROR:
      return Object.assign({}, state, {
        visible: true,
        messageType: action.messageType,
        message: action.message,
      })
    case HIDE_ERROR:
      return Object.assign({}, state, {
        visible: false,
        messageType: '',
        message: '',
      })
    default:
      return state;
  }
}
