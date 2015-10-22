var React = require('react');

module.exports = React.createClass({
  render: function(){
    console.log("Rending card title: "+this.props.title);
    return (
      <div className="col s12 m6 l4">
        <div className="card blue-grey darken-1">
          <div className="card-content white-text">
            <span className="card-title">{this.props.title}</span>
            <p>{this.props.description}</p>
          </div>
          <div className="card-action">
            <a href="#">This is a link</a>
            <a href="#">This is a link</a>
          </div>
        </div>
      </div>
    );
  }
});
