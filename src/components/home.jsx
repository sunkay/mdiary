var React = require('react');
var ConditionsContainer = require('./conditions/conditions-container');

module.exports = React.createClass({
  render: function(){
    return (
      <div className="container">
        <ConditionsContainer />
      </div>
    );
  }
});
