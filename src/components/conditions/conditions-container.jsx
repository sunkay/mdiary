var React = require('react');
var ConditionsList = require('./conditions-list');

import {connect} from 'react-redux';

var conditionsContainer = React.createClass({
    //var {reduxState} = this.props;

  render: function(){
    console.log("In Conditions container render....");
    console.log(this.props.reduxState);
    return(
        <ConditionsList conditions={this.props.reduxState.conditionslist} />
    );
  },

});


function mapStateToProps(state) {
  return { reduxState: state }
}

//export default connect(mapStateToProps)(conditionsContainer)

module.exports = connect(mapStateToProps)(conditionsContainer);
