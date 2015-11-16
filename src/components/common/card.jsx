import React from 'react';

export default class Card extends React.Component{
  render(){
    console.log("Rending card title: ", this.props.title, "ID:", this.props.id);
    return (
      <div className="col s12 m6 l4">
        <div className="card blue-grey darken-1">
          <div className="card-content white-text">
            <span className="card-title">{this.props.title}</span>
            <p>{this.props.description}</p>
          </div>
          <div  className="card-action">
            <a id={this.props.id} href="#"> <i className="material-icons">delete</i></a>
            <a id={this.props.id} href="#">This is a link</a>
          </div>
        </div>
      </div>
    );
  }
}
