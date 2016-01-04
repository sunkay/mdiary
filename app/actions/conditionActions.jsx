import _ from 'lodash';
import Firebase from 'firebase';

export const ADD_CONDITION = "ADD_CONDITION"
export const DELETE_CONDITION = "DELETE_CONDITION"
export const UPDATE_CONDITION = "UPDATE_CONDITION"
// Fetch async
export const REQUEST_CONDITIONS = "REQUEST_CONDITIONS"
export const RECEIVE_CONDITIONS = "RECEIVE_CONDITIONS"

var fbref = new Firebase('https://m-diary.firebaseio.com/conditions');


export function addCondition(title, description) {
  //console.log("In conditionActions:addCondition", title, description);
  fbref.push({
    title: title,
    description: description
  });
  return {
    type: ADD_CONDITION,
  };
}

export function deleteCondition(id){
  //console.log("In conditionActions:deleteCondition:", id);
  fbref.child(id).remove();
  return {
    type: DELETE_CONDITION,
  }
}

export function findCondition(state, id){
  //console.log("findCondition:state.items", id)

  if(state.items == null) return;

  var found = Object.keys(state.items).map(key => {
    //console.log("findCondition:key", key, id);
    if(key === id){
      //console.log("findCondition:state.found");
      return state.items[key];
    }
  });
  found = found.filter(function(e){return e});
  //console.log("findCondition:state.found", found);

  return found[0];
}

export function updateCondition(id, title, desc){
  //console.log("In conditionActions:updateCondition:", id);

  fbref.child(id).set({
    title: title,
    description: desc
  });
  return {
    type: UPDATE_CONDITION,
  }
}

// FETCH Conditions async

export function requestConditions() {
  //console.log("conditionActions - requestConditions...");
  return {
    type: REQUEST_CONDITIONS,
  }
}

export function receiveConditions(conditions) {
  //console.log("conditionActions - receiveConditions...");

  return {
    type: RECEIVE_CONDITIONS,
    conditions: conditions,
    receivedAt: Date.now()
  }
}

export function fetchConditions(num) {
  // thunk
  return dispatch => {
    dispatch(requestConditions());
    fbref.orderByChild("title").limitToFirst(Number(num)).on("value",
      function(snapshot){
        var data = [];
        snapshot.forEach(function(childSnap){
          data[childSnap.key()] = childSnap.val();
        });
        //console.log("in fetchConditions:", data);
        dispatch(receiveConditions(data));
    });
  }
}
