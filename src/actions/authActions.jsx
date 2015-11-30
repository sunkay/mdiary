import {fb} from 'firebase';

export const REGISTER_USER = "REGISTER_USER"
export const LOGIN_USER = "LOGIN_USER"
export const REQUEST_USER = "REGISTER_USER"
export const RECEIVE_USER = "RECEIVE_USER"


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

  return {
    type: LOGIN_USER,
  };
}
