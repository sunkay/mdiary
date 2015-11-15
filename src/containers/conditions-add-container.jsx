import React from 'react';
import {connect} from 'react-redux';

import {addCondition} from '../actions/conditionActions';
import ConditionsAdd from '../components/conditions/conditions-add';

class conditionsAddContainer extends React.Component{
  render(){
    console.log("In Conditions add container render....");
    console.log(this.props);
    const { dispatch } = this.props

    return(
        <ConditionsAdd
            onAddClick={function(title, desc){
              console.log("in onAddClick ", title, " ", desc);
              dispatch(addCondition(title,desc));
            }}
        />
    );
  }
}

function mapStateToProps(state) {
  return { reduxState: state }
}

export default connect(mapStateToProps)(conditionsAddContainer)
