import React from 'react';
import {connect} from 'react-redux';

import {deleteCondition} from '../actions/conditionActions';
import ConditionsList from '../components/conditions/conditions-list';

class conditionsContainer extends React.Component{
    render(){
      const { dispatch, conditions } = this.props;

      //console.log("In Conditions container render2....", reduxState);

      return(
          <ConditionsList
            conditions={conditions}
            onDelete={(id) =>
              dispatch(deleteCondition(id))
            }
          />
      );
    }
}

function mapStateToProps(state) {
  console.log("in conditionsContainer:state ", state.default.conditions);
  return { conditions: state.default.conditions }
}
export default connect(mapStateToProps)(conditionsContainer)
