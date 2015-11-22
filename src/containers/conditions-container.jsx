import React from 'react';
import {connect} from 'react-redux';

import {deleteCondition} from '../actions/conditionActions';
import ConditionsList from '../components/conditions/conditions-list';

class conditionsContainer extends React.Component{
    render(){
      const { dispatch, reduxState } = this.props;

      //console.log("In Conditions container render2....", reduxState);

      return(
          <ConditionsList
            conditions={reduxState.conditionslist}
            onDelete={(id) =>
              dispatch(deleteCondition(id))
            }
          />
      );
    }
}

function mapStateToProps(state) {
  return { reduxState: state }
}

export default connect(mapStateToProps)(conditionsContainer)
