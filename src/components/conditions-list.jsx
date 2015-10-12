var React = require('react');
var Condition = require('./condition-item');

module.exports = React.createClass({
  getInitialState: function() {
    return {
      conditions: [
        {
          name: 'Headache',
          description: 'I am a very simple card. I am good at containing small bits of information. I am convenient because I require little markup to use effectively.'
        },
        {
          name: 'Stomach Ache',
          description: 'I am a very simple card. I am good at containing small bits of information. I am convenient because I require little markup to use effectively.'
        },
        {
          name: 'Body Pains',
          description: 'I am a very simple card. I am good at containing small bits of information. I am convenient because I require little markup to use effectively.'
        },
        {
          name: 'Fever',
          description: 'I am a very simple card. I am good at containing small bits of information. I am convenient because I require little markup to use effectively.'
        },
        {
          name: 'Cough',
          description: 'I am a very simple card. I am good at containing small bits of information. I am convenient because I require little markup to use effectively.'
        }
      ]
    };
  },
  render: function(){
    return (
      <div className="row">
        {this.renderConditions()}
      </div>
    );
  },
  renderConditions: function(){

    return this.state.conditions.map(function(condition){
      return (
        <Condition {...condition} />
      );
    });
  }
});
