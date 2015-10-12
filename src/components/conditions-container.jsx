var React = require('react');
var ConditionsList = require('./conditions-list');

module.exports = React.createClass({
  getInitialState: function() {
    return {
      conditions: []
    };
  },
  componentDidMount: function() {
    var listOfConditions = [
      {
        title: 'Headache',
        description: 'I am a very simple card. I am good at containing small bits of information. I am convenient because I require little markup to use effectively.'
      },
      {
        title: 'Stomach Ache',
        description: 'I am a very simple card. I am good at containing small bits of information. I am convenient because I require little markup to use effectively.'
      },
      {
        title: 'Body Pains',
        description: 'I am a very simple card. I am good at containing small bits of information. I am convenient because I require little markup to use effectively.'
      },
      {
        title: 'Fever',
        description: 'I am a very simple card. I am good at containing small bits of information. I am convenient because I require little markup to use effectively.'
      },
      {
        title: 'Cough',
        description: 'I am a very simple card. I am good at containing small bits of information. I am convenient because I require little markup to use effectively.'
      }
    ];

    this.setState({conditions: listOfConditions});
  },
  render: function(){
    return <ConditionsList conditions={this.state.conditions} />
  }
});
