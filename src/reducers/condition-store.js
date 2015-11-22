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
      return state.filter(item =>
          item.id != action.id
        )
    case 'UPDATE_CONDITION':
        return state.map(item =>
          item.id == action.id ?
          Object.assign({}, item,
            {
              title: action.title,
              description: action.description
            }) : item
          )
    default:
      return state;
  }
}
