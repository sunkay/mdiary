var alt = require('../alt');
var firebase = require('../components/common/firebase');
var reactFire = require('reactfire');

var mockData = [
  {
    title: '1- Headache',
    description: 'I am a very simple card. I am good at containing small bits of information. I am convenient because I require little markup to use effectively.'
  },
  {
    title: '2 - Headache',
    description: 'I am a very simple card. I am good at containing small bits of information. I am convenient because I require little markup to use effectively.'
  },
  {
    title: '3 - Headache',
    description: 'I am a very simple card. I am good at containing small bits of information. I am convenient because I require little markup to use effectively.'
  },
  {
    title: '4 - Headache',
    description: 'I am a very simple card. I am good at containing small bits of information. I am convenient because I require little markup to use effectively.'
  },
  {
    title: '5 - Headache',
    description: 'I am a very simple card. I am good at containing small bits of information. I am convenient because I require little markup to use effectively.'
  },
  {
    title: '6 - Headache',
    description: 'I am a very simple card. I am good at containing small bits of information. I am convenient because I require little markup to use effectively.'
  },
];


class ConditionsActions{

  updateConditions(conditions){
    this.dispatch(conditions);
  }

  fetchConditions(){
    this.dispatch();
    var conditions = [];

    this.ref = firebase.getFBConditionsHandle();
    this.ref.on("value", function(allConditionsSnapshot){
      allConditionsSnapshot.forEach(function(conditionSnapshot){
        conditions.push(conditionSnapshot.val());
      });
      this.actions.updateConditions(conditions);
    }.bind(this));
  }

  addCondition(condition){
    this.dispatch();

    mockData.push(condition);

    this.actions.updateConditions(mockData);
  }
}

module.exports = alt.createActions(ConditionsActions);
