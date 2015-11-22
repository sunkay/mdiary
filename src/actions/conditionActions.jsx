import _ from 'lodash';


export function addCondition(title, description, index) {
  console.log("In conditionActions:addCondition", title, description, index);
  return {
    type: 'ADD_CONDITION',
    id: index,
    title: title,
    description: description
  };
}

export function deleteCondition(id){
  console.log("In conditionActions:deleteCondition:", id);
  return {
    type: 'DELETE_CONDITION',
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
    type: 'UPDATE_CONDITION',
    id: id,
    title: title,
    description: desc
  }
}
