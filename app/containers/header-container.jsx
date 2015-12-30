import React from 'react';
import {connect} from 'react-redux';

import {registerUser} from '../actions/authActions';
import Header from '../components/header';

class registerContainer extends React.Component{
  render(){
    //console.log("registerContainer:render");
    const { user, dispatch } = this.props

    return(
        <Header
          loggedIn={user.loggedIn}
          username={user.username}
          />
    );
  }
}

function mapStateToProps(state) {
  //console.log("headerContainer:mapStateToProps:", state.user);
  return { user: state.user }
}

export default connect(mapStateToProps)(registerContainer)
