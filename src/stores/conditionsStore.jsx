var alt = require('../alt');
var ConditionsActions = require('../actions/conditionsActions');

class ConditionsStore{

  // instance variables become state
  constructor(){
    this.conditions = [];

    // bind our action handlers to actions
    this.bindListeners({
      handleUpdateConditions: ConditionsActions.UPDATE_CONDITIONS,
      handleFetchConditions: ConditionsActions.FETCH_CONDITIONS
    });
  }

  handleUpdateConditions(conditions){
    console.log("In handleUpdateConditions...");

    this.conditions = conditions;
  }

  handleFetchConditions(){
    console.log("In handleFetchConditions...");

    this.conditions = [];
  }

}

module.exports = alt.createStore(ConditionsStore, 'ConditionsStore');
