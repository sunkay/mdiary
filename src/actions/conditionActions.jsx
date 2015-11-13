var alt = require('../alt');

class ConditionActions{

  updateConditions(conditions){
    console.log("ConditionActions:In updateConditions...");

    this.dispatch(conditions);
  }

  fetchConditions(){
    console.log("ConditionActions:In fetchConditions...");

    this.dispatch();
  }

  conditionsFailed(errorMessage) {
    console.log("ConditionActions:In conditionsFailed...");

    this.dispatch(errorMessage);
  }

}

module.exports = alt.createActions(ConditionActions);
