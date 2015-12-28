import React from 'react';
import {connect} from 'react-redux';

import {deleteCondition, fetchConditions} from '../actions/conditionActions';
import ConditionsList from '../components/conditions/conditions-list';
import Spinner from '../components/common/spinner';

class conditionsContainer extends React.Component{
    componentWillMount(){
      this.props.dispatch(fetchConditions());
    }

    render(){
      const { dispatch, conditions } = this.props;

      //console.log("In Conditions container render....", conditions);

      if(conditions.isFetching || conditions.items == null)
        return(
          <Spinner />
        );
      else
        return(
            <ConditionsList
              conditions={conditions.items}
              onDelete={(id) =>
                dispatch(deleteCondition(id))
              }
            />
        );
    }
}

function mapStateToProps(state) {
  console.log("conditionsContainer:mapStateToProps:", state);
  return { conditions: state.conditions }
}
export default connect(mapStateToProps)(conditionsContainer)
