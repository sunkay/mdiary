var React = require('react');
var ReactFire = require('reactfire');
var Firebase = require('firebase');
var ConditionsList = require('./conditions-list');

var rootUrl = "https://m-diary.firebaseio.com/";

module.exports = React.createClass({
  mixins: [ReactFire],

  getInitialState: function() {
    return {
      conditions: []
    };
  },
  componentWillMount: function() {
    this.fb = new Firebase(rootUrl + 'conditions/');
    this.bindAsArray(this.fb, 'conditions');

    /*
    if(this.state.conditions.length === 0){
      console.log("empty DB.... initializing...");
      this.initDBwithRecords();
    }
    */
  },
  render: function(){
    console.log("In Conditions container render....");
    return <ConditionsList conditions={this.state.conditions} />
  },

  handleDataLoaded: function(){
    console.log("in conditions-container:handleDataLoaded");
  },

  initDBwithRecords: function(){
    this.fb.push({
      title: 'Headache',
      description: 'I am a very simple card. I am good at containing small bits of information. I am convenient because I require little markup to use effectively.'
    });
    this.fb.push({
      title: 'Stomach Ache',
      description: 'I am a very simple card. I am good at containing small bits of information. I am convenient because I require little markup to use effectively.'
    });
    this.fb.push({
      title: 'Body Pains',
      description: 'I am a very simple card. I am good at containing small bits of information. I am convenient because I require little markup to use effectively.'
    });
    this.fb.push({
      title: 'Fever',
      description: 'I am a very simple card. I am good at containing small bits of information. I am convenient because I require little markup to use effectively.'
    });
    this.fb.push({
      title: 'Cough',
      description: 'I am a very simple card. I am good at containing small bits of information. I am convenient because I require little markup to use effectively.'
    });
  }
});
