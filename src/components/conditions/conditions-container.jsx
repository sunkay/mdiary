var React = require('react');
var AltContainer = require('alt/AltContainer');
var ConditionStore = require('../../stores/conditionStore');
var ConditionsActions = require('../../actions/conditionActions');

var ConditionsList = require('./conditions-list');


var conditionsContainer = React.createClass({

  getInitialState: function() {
    return ConditionStore.getState();
  },

  componentDidMount: function() {
    ConditionStore.fetchConditions();
  },

  render: function(){
    console.log("In Conditions container render....");
    return(
      <AltContainer store={ConditionStore}>
        <ConditionsList conditions={this.state.conditions} />
      </AltContainer>
    );
  },

});

module.exports = conditionsContainer;
