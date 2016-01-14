import React from 'react';
import {connect} from 'react-redux';
import {loginUser, loginUserAction} from '../actions/authActions';
import {showError, hideError} from '../actions/messageActions';
import Login from '../components/auth/login-form';
import Message from './message-container';
import history from '../history';


import {
  SUCCESS,
  EMAIL_TAKEN,
  INVALID_EMAIL,
  INVALID_PASSWORD,
  INVALID_USER,
  UNKNOWN_ERROR,
  USER_DENIED
} from '../constants';

class loginContainer extends React.Component{
  render(){
    //console.log("loginContainer:render");

    var message = "TEST";
    return(
      <div>
        <Message/>
        <Login
          validationMessage={message}
          onSubmit={
            (email, password) =>
            {
              loginUser(email,password, (result) => {
                if(result.code != SUCCESS){
                  // display error message to the user
                  this.props.dispatch(showError(result.code, result.msg));
                  console.log("Login Failed: ", result.msg);
                }
                else{
                  // Login Success
                  this.props.dispatch(hideError());
                  this.props.dispatch(loginUserAction(email));
                  if(this.props.location.state){
                    console.log("redirect to: ", this.props.location.state.nextPathName);
                    history.replaceState(null, this.props.location.state.nextPathName);
                  }
                  else
                    history.replaceState(null, '/');
                }
              });
            }
          }
          />
      </div>
    );
  }
}

export default connect()(loginContainer)
