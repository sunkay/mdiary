import React from 'react';

export default class Main extends React.Component {
  render(){
    console.log("In main render");
    return (
      <div>
        MAIN Component1
        {this.props.children}
      </div>
    );
  }
}
