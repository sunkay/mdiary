var React = require('react');
var ConditionsList = require('./conditions-list');

module.exports = React.createClass({
  render: function(){
    console.log("In Home render");

    return (
      <div className="container">
        <ConditionsList />
      </div>
    );
  }
});
