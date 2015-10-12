var React = require('react');
var ConditionsContainer = require('./conditions-container');

module.exports = React.createClass({
  render: function(){
    return (
      <div className="container">
        <ConditionsContainer />
      </div>
    );
  }
});
