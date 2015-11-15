
export function addCondition(title, description) {
  console.log("In conditionActions:addCondition", title, description);
  return {
    type: 'ADD_CONDITION',
    title: title,
    description: description
  };
}
