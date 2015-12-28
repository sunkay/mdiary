var React = require('react');
var HeaderContainer = require('../containers/header-container');

module.exports = React.createClass({
    render: function(){
      return (
        <div>
          <HeaderContainer />
          {this.props.children}
        </div>
      );
    }
});
