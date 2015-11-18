const initialState = [
  {
    id: 1,
    title: '1- Headache',
    description: 'I am a very simple card. I am good at containing small bits of information. I am convenient because I require little markup to use effectively.'
  },
  {
    id: 2,
    title: '2 - Headache',
    description: 'I am a very simple card. I am good at containing small bits of information. I am convenient because I require little markup to use effectively.'
  },
  {
    id: 3,
    title: '3 - Headache',
    description: 'I am a very simple card. I am good at containing small bits of information. I am convenient because I require little markup to use effectively.'
  },
  {
    id: 4,
    title: '4 - Headache',
    description: 'I am a very simple card. I am good at containing small bits of information. I am convenient because I require little markup to use effectively.'
  },
  {
    id: 5,
    title: '5 - Headache',
    description: 'I am a very simple card. I am good at containing small bits of information. I am convenient because I require little markup to use effectively.'
  },
  {
    id: 6,
    title: '6 - Headache',
    description: 'I am a very simple card. I am good at containing small bits of information. I am convenient because I require little markup to use effectively.'
  },
];

import _ from 'lodash';

export default function conditions(state=initialState, action){
  switch(action.type){
    case 'ADD_CONDITION':
      return[
        ...state,
        {
          id: action.id,
          title: action.title,
          description: action.description
        }
      ]
    case 'DELETE_CONDITION':
      var x = _.remove(state, function(item){
        if(item.id === action.id)
        return true;
        else {
          return false;
        }
      })
      return[
        ...state
      ]
    case 'UPDATE_CONDITION':
      return[
        ...state,
        {
          id: action.id,
          title: action.title,
          description: action.description
        }
      ]
    case 'FIND_CONDITION':
      var condition = _.find(state, function(item){
        console.log("in Find condition: ",action.id, item.id);
        if(item.id == action.id)
          return true;
        else
          return false;
      })
      return[
        condition
      ]
    default:
      return state;
  }
}
