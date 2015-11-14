import React from 'react';
import Condition from '../common/card';

module.exports = React.createClass({
  render: function(){
    return (
      <div className="row">
        {this.renderConditions()}
      </div>
    );
  },
  renderConditions: function(){
    return this.props.conditions.map(function(condition){
      return (
        <Condition {...condition} />
      );
    });
  }
});
