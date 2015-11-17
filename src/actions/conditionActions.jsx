
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
