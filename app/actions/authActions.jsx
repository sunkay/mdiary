import {fb} from 'firebase';

import {
  REGISTER_USER,
  LOGIN_USER,
  LOGOUT_USER,
} from '../constants';

var root_fbref = new Firebase('https://m-diary.firebaseio.com/');
var users_fbref = new Firebase('https://m-diary.firebaseio.com/users');


export function registerUser(email, password) {
  console.log("In authActions:registerUser", email, password);

  // create user & log them in
  root_fbref.createUser({
    email: email,
    password: password
  }, function(error, userData){
    if(error){
      console.log("Error creating a user:", error);
    } else {
      console.log("successfully created a user:", userData);
    }
  });

  return {
    type: REGISTER_USER,
  };
}

export function loginUser(email, password) {
  console.log("In authActions:loginUser", email, password);

  // create user & log them in
  root_fbref.authWithPassword({
    email: email,
    password: password
  }, function(error, userData){
    if(error){
      console.log("Login failed:", error);
    } else {
      console.log("Authenticaed successfully:", userData);
    }
  });

}

export function logoutUser()
{
  console.log("In authActions:logoutUser");

  root_fbref.unauth();
}

export function loginUserAction(email){
  return {
    type: LOGIN_USER,
    email: email
  };
}

export function logoutUserAction(){
  return {
    type: LOGOUT_USER
  };
}


//thunk - firebase callback method to monitor login/logout of the user
export function monitorAuth() {
  // thunk
  return dispatch => {
    root_fbref.onAuth(authData => {
      if(authData){
        console.log("Authenticaed successfully:", authData);
        dispatch(loginUserAction(authData.password.email));
      } else {
        console.log("user logged out", authData);
        dispatch(logoutUserAction());
      }
    });
  }
}
