var React = require('react');
var ConditionsContainer = require('./conditions/conditions-container');

import {createStore, combineReducers} from 'redux';
import {Provider} from 'react-redux';
import * as reducers from '../reducers';

const reducer = combineReducers(reducers);
const store = createStore(reducer);

module.exports = React.createClass({
  render: function(){
    return (
      <div className="container">
        <Provider store={store}>
          <ConditionsContainer />
        </Provider>
      </div>
    );
  }
});
