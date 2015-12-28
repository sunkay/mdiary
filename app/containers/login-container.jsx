import React from 'react';
import {connect} from 'react-redux';
import {loginUser} from '../actions/authActions';
import Login from '../components/auth/login-form';
import history from '../history';

class loginContainer extends React.Component{
  render(){
    console.log("loginContainer:render");

    return(
        <Login
            onSubmit={
              (email, password) =>
              {
                loginUser(email,password);
                history.replaceState(null, '/');
              }
            }
        />
    );
  }
}

export default connect()(loginContainer)
