import React from 'react';
import {connect} from 'react-redux';
import {pushState} from 'redux-router';

import {loginUser} from '../actions/authActions';
import Login from '../components/auth/login-form';

class loginContainer extends React.Component{
  render(){
    console.log("loginContainer:render");
    const { dispatch } = this.props

    return(
        <Login
            onSubmit={
              (email, password) =>
              {
                loginUser(email,password);
                this.props.pushState(null, '/');
              }
            }
        />
    );
  }
}

function mapStateToProps(state){
  return {
  }
}

export default connect(mapStateToProps, {
  pushState
})(loginContainer)
