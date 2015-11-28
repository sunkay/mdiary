import _ from 'lodash';
import {fb} from 'firebase';

export const ADD_CONDITION = "ADD_CONDITION"
export const DELETE_CONDITION = "DELETE_CONDITION"
export const UPDATE_CONDITION = "UPDATE_CONDITION"
// Fetch async
export const REQUEST_CONDITIONS = "REQUEST_CONDITIONS"
export const RECEIVE_CONDITIONS = "RECEIVE_CONDITIONS"

var fbref = new Firebase('https://m-diary.firebaseio.com/conditions');


export function addCondition(title, description) {
  console.log("In conditionActions:addCondition", title, description);
  return {
    type: ADD_CONDITION,
    title: title,
    description: description
  };
}

export function deleteCondition(id){
  console.log("In conditionActions:deleteCondition:", id);
  var child = fbref.child(id);
  child.remove();
  return {
    type: DELETE_CONDITION,
    id: id
  }
}

export function findCondition(state, id){
  var condition = _.find(state, function(item){
    if(item.id == id)
      return true;
    else
      return false;
  })
  console.log("In conditionActions:findCondition:", id);
  return condition;
}

export function updateCondition(id, title, desc){
  console.log("In conditionActions:updateCondition:", id);
  return {
    type: UPDATE_CONDITION,
    id: id,
    title: title,
    description: desc
  }
}

// FETCH Conditions async

export function requestConditions() {
  console.log("conditionActions - requestConditions...");
  return {
    type: REQUEST_CONDITIONS,
  }
}

export function receiveConditions(conditions) {
  console.log("conditionActions - receiveConditions...");

  return {
    type: RECEIVE_CONDITIONS,
    conditions: conditions,
    receivedAt: Date.now()
  }
}

export function fetchConditions() {
  // thunk
  return dispatch => {
    dispatch(requestConditions());
    fbref.on("value", function(snapshot){
      console.log("in fetchConditions:", )
      dispatch(receiveConditions(snapshot.val()));
    });
  }
}
