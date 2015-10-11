var React = require('react');
//var Header = require('./header');

module.exports = React.createClass({
    render: function(){
      return (
        <div>
          HEADER
          {this.props.children}
        </div>
      );
    }
});
