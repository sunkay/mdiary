import React from 'react';
import {connect} from 'react-redux';

import {findCondition, updateCondition} from '../actions/conditionActions';
import ConditionsAdd from '../components/conditions/conditions-add';

class conditionsUpdateContainer extends React.Component{

  render(){
    const { dispatch, condition } = this.props
    //console.log("in conditionsUpdateContainer:render...", condition);

    return(
        <ConditionsAdd
            conditions={condition}
            id={this.props.params.id}
            onSubmit={(title, desc) =>
              dispatch(updateCondition(this.props.params.id, title,desc))
            }

        />
    );
  }
}

// should use reselct and memoized selectors... what ever that means..
function mapStateToProps(state, ownProps) {
  return {
    condition: findCondition(state.conditions, ownProps.params.id)
  }
}

export default connect(mapStateToProps)(conditionsUpdateContainer)
