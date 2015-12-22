import React from 'react';
import {connect} from 'react-redux';

import {registerUser} from '../actions/authActions';
import Register from '../components/auth/register-form';

class registerContainer extends React.Component{
  render(){
    console.log("registerContainer:render");
    const { dispatch } = this.props

    return(
        <Register
            onSubmit={(email, password) =>
              dispatch(registerUser(email,password))
            }
        />
    );
  }
}

export default connect()(registerContainer)
