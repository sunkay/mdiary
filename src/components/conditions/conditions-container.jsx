var React = require('react');
var ConditionsStore = require('../../stores/conditionsStore');
var ConditionsActions = require('../../actions/conditionsActions');

var ConditionsList = require('./conditions-list');


var conditionsContainer = React.createClass({

  getInitialState: function() {
    return ConditionsStore.getState();
  },

  componentDidMount: function() {
    ConditionsStore.listen(this.onChange);

    ConditionsActions.fetchConditions();
  },

  componentWillUnmount: function() {
    ConditionsStore.unlisten(this.onChange);
  },

  onChange: function(state){
    this.setState(state);
  },

  render: function(){
    console.log("In Conditions container render....");
    return <ConditionsList conditions={this.state.conditions} />
  },

});

module.exports = conditionsContainer;
