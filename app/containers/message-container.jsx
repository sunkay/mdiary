import React from 'react';
import {connect} from 'react-redux';

class messageContainer extends React.Component{
  render(){
    const { message, dispatch } = this.props

    return(
      <div className="message center">
        {message.messageType}:      {message.message}
      </div>
    );
  }
}

function mapStateToProps(state) {
  //console.log("headerContainer:mapStateToProps:", state.user);
  return { message: state.message }
}

export default connect(mapStateToProps)(messageContainer)
