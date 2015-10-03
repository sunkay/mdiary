import React from 'react';
import Header from './header';


export default class Main extends React.Component {
  render(){
    return (
      <div>
        <Header />
        {this.props.children}
      </div>
    );
  }
}
