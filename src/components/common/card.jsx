import React from 'react';
import {Link} from 'react-router';

export default class Card extends React.Component{
  render(){
    return (
      <div className="col s12 m6 l4">
        <div className="card blue-grey darken-1">
          <div className="card-content white-text">
            <span className="card-title">{this.props.title}</span>
            <p>{this.props.description}</p>
          </div>
          <div  className="card-action">
            <a id={this.props.id}
              className="btn-floating"
              onClick={this.handleDelete.bind(this)}
              >
              <i className="material-icons">delete</i>
            </a>
            <Link
              to={"/condition-update/"+this.props.id}
              id={this.props.id}
              className="btn-floating"
            >
            <i className="material-icons">mode_edit</i>
            </Link>
            <a id={this.props.id} className="btn-floating">
              <i className="material-icons">thumb_up</i>
            </a>
          </div>
        </div>
      </div>
    );
  }

  handleDelete(e){
    this.props.onDelete(this.props.id);
  }
}
