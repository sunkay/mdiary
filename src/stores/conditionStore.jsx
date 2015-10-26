var alt = require('../alt');
var ConditionsActions = require('../actions/conditionActions');
var ConditionSource = require('../sources/conditionSource');

class ConditionsStore{

  // instance variables become state
  constructor(){
    this.conditions = [];
    this.errorMessage = null;

    // bind our action handlers to actions
    this.bindListeners({
      handleUpdateConditions: ConditionsActions.UPDATE_CONDITIONS,
      handleFetchConditions: ConditionsActions.FETCH_CONDITIONS,
      handleConditionsFailed: ConditionsActions.CONDITIONS_FAILED
    });

    this.exportAsync(ConditionSource);
  }

  handleUpdateConditions(conditions){
    console.log("ConditionsStore:In handleUpdateConditions...");

    this.conditions = conditions;
    this.errorMessage = null;
  }

  handleFetchConditions(){
    console.log("ConditionsStore:In handleFetchConditions...");

    this.conditions = [];
  }

  handleConditionsFailed(errorMessage){
    this.errorMessage = errorMessage;
  }
}

module.exports = alt.createStore(ConditionsStore, 'ConditionsStore');
