var alt = require('../alt');

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
    this.actions.updateConditions(mockData);
  }

  addCondition(condition){
    this.dispatch();

    mockData.push(condition);

    this.actions.updateConditions(mockData);
  }
}

module.exports = alt.createActions(ConditionsActions);
