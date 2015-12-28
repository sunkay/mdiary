import React from 'react';
import HeaderContainer from '../containers/header-container';

export default class Main extends React.Component{
  render(){
    console.log("Main Render: ");
    return (
      <div>
        <HeaderContainer />
        {this.props.children}
      </div>
    );
  }
}
