var alt = require('../alt');

class ConditionActions{

  updateConditions(conditions){
    this.dispatch(conditions);
  }

  fetchConditions(){
    this.dispatch();
  }

  conditionsFailed(errorMessage) {
    this.dispatch(errorMessage);
  }

}

module.exports = alt.createActions(ConditionActions);
