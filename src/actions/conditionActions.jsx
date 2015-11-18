
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

export function findCondition(id){
  console.log("In conditionActions:findCondition:", id);
  return {
    type: 'FIND_CONDITION',
    id: id
  }
}

export function updateCondition(id, title, desc){
  console.log("In conditionActions:updateCondition:", id);
  return {
    type: 'UPDATE_CONDITION',
    id: id,
    title: title,
    description: description
  }
}
