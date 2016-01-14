import {
  SHOW_ERROR,
  HIDE_ERROR,
} from '../constants';

export function showError(messageType, message){
  return {
    type: SHOW_ERROR,
    messageType: messageType,
    message: message
  };
}

export function hideError(){
  return {
    type: HIDE_ERROR
  };
}
