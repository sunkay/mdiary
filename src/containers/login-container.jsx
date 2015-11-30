import React from 'react';
import {connect} from 'react-redux';

import {loginUser} from '../actions/authActions';
import Login from '../components/auth/login-form';

class loginContainer extends React.Component{
  render(){
    console.log("loginContainer:render");
    const { dispatch } = this.props

    return(
        <Login
            onSubmit={(email, password) =>
              dispatch(loginUser(email,password))
            }
        />
    );
  }
}

export default connect()(loginContainer)
