import React from 'react';
import {connect} from 'react-redux';

import ConditionsList from '../components/conditions/conditions-list';

class conditionsContainer extends React.Component{
    render(){
      console.log("In Conditions container render2....");
      console.log(this.props.reduxState);

      const { reduxState } = this.props;

      return(
          <ConditionsList conditions={reduxState.conditionslist} />
      );
    }
}

function mapStateToProps(state) {
  return { reduxState: state }
}

export default connect(mapStateToProps)(conditionsContainer)
