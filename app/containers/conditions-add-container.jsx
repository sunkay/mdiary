import React from 'react';
import {connect} from 'react-redux';

import {addCondition} from '../actions/conditionActions';
import ConditionsAdd from '../components/conditions/conditions-add';

export class conditionsAddContainer extends React.Component{
  render(){
    //console.log("In Conditions add container render....");
    const { dispatch, conditions } = this.props

    return(
        <ConditionsAdd
            onSubmit={(title, desc) =>
              dispatch(addCondition(title,desc))
            }
        />
    );
  }
}

function mapStateToProps(state) {
  return {
    conditions: state.conditions
  }
}

export default connect(mapStateToProps)(conditionsAddContainer)
