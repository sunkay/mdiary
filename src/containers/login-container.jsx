import React from 'react';
import {connect} from 'react-redux';
import {createHistory} from 'history';

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

                let history = createHistory();
                
                // transition to main page
                history.pushState(null, '/');
              }
            }
        />
    );
  }
}

export default connect()(loginContainer)
