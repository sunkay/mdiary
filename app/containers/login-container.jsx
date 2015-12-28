import React from 'react';
import {connect} from 'react-redux';
import {pushPath} from 'redux-simple-router';

import {loginUser} from '../actions/authActions';
import Login from '../components/auth/login-form';
import history from '../history';

class loginContainer extends React.Component{
  render(){
    console.log("loginContainer:render");
    const { dispatch, state } = this.props

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

function mapStateToProps(state){
  return {
    state: state
  }
}

function mapDispatchToProps(dispatch){
  return {
    dispatch: dispatch
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(loginContainer)
