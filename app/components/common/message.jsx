import React from 'react';

export default class Message extends React.Component{
  render(){
    return (
      <div className="message center">
        {this.props.messageType}:      {this.props.message}
      </div>
    );
  }
}
