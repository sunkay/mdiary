import React from 'react';
import {connect} from 'react-redux';

import {addCondition} from '../actions/conditionActions';
import ConditionsAdd from '../components/conditions/conditions-add';

class conditionsAddContainer extends React.Component{
  render(){
    console.log("In Conditions add container render....");
    const { dispatch, reduxState } = this.props

    return(
        <ConditionsAdd
            onSubmit={(title, desc) =>
              dispatch(addCondition(title,desc, reduxState.conditionslist.length+1))
            }
        />
    );
  }
}

function mapStateToProps(state) {
  return {
    reduxState: state
  }
}

export default connect(mapStateToProps)(conditionsAddContainer)
