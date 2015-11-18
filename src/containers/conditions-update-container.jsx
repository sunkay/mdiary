import React from 'react';
import {connect} from 'react-redux';

import {findCondition, updateCondition} from '../actions/conditionActions';
import ConditionsAdd from '../components/conditions/conditions-add';

class conditionsUpdateContainer extends React.Component{
  componentWillMount(){
    const { dispatch, reduxState } = this.props
    dispatch(findCondition(this.props.params.id));
  }

  render(){
    const { dispatch, reduxState } = this.props
    console.log("In Conditions update container render....", reduxState);

    return(
        <ConditionsAdd
            updateFlag={true}
            conditions={reduxState.conditionslist}
            onAddClick={(title, desc) =>
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

export default connect(mapStateToProps)(conditionsUpdateContainer)
