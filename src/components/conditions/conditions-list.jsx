import React from 'react';
import Condition from '../common/card';

module.exports = React.createClass({
  render: function(){
    return (
      <div className="row">
        {this.renderConditions(this.props.conditions)}
      </div>
    );
  },

  renderConditions: function(conditions){
    return (
      // iterate over the object
      Object.keys(conditions)
        .map(function(key){
            return (
              <Condition
                key={key}
                id={key}
                {...conditions[key]}
                onDelete={this.props.onDelete }
              />
            );
        },
      this)
    );
  }
});
