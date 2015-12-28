import React from 'react';
import ConditionsContainer from '../containers/conditions-container';

module.exports = React.createClass({
  render: function(){
    console.log("Home Render: ");
    return (
      <div className="container">
          <ConditionsContainer />
      </div>
    );
  }
});
