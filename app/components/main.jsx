import React from 'react';
import HeaderContainer from '../containers/header-container';

export default class Main extends React.Component{
  render(){
    return (
      <div>
        <HeaderContainer />
        {this.props.children}
      </div>
    );
  }
}
