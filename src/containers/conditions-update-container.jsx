import React from 'react';
import {connect} from 'react-redux';

import {findCondition, updateCondition} from '../actions/conditionActions';
import ConditionsAdd from '../components/conditions/conditions-add';

class conditionsUpdateContainer extends React.Component{
  /*
  componentWillMount(){
    console.log("in conditionsUpdateContainer:componentWillMount... Enter", reduxState)

    const { dispatch, reduxState } = this.props
    dispatch(findCondition(this.props.params.id));

    console.log("in conditionsUpdateContainer:componentWillMount... Exit", reduxState)

  }
  */

  render(){
    const { dispatch, condition } = this.props
    console.log("in conditionsUpdateContainer:render...", condition);

    return(
        <ConditionsAdd
            updateFlag={true}
            conditions={condition}
            onSubmit={(title, desc) =>
              dispatch(updateCondition(this.props.params.id, title,desc))
            }

        />
    );
  }
}

function mapStateToProps(state, ownProps) {
  console.log("in conditionsUpdateContainer:mapStateToProps...");
  return {
    condition: findCondition(state.conditionslist, ownProps.params.id)
  }
}

export default connect(mapStateToProps)(conditionsUpdateContainer)
