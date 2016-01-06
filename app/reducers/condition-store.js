const mockState = [
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

/*
default:
{
  users:{
    items:[
      id: {
        uid
        name
      }
    ]
  },
  conditions:{
    isFetching: true,
    lastUpdated: date,
    items: [
      ID: {
        title:
        description:
      }
    ]
  }
}
*/

import {
  ADD_CONDITION,
  DELETE_CONDITION,
  UPDATE_CONDITION,
  REQUEST_CONDITIONS,
  RECEIVE_CONDITIONS
} from '../constants';

export function conditions(state={}, action){
  switch(action.type){
    case REQUEST_CONDITIONS:
      return Object.assign({}, state, {
          isFetching: true
        })
    case RECEIVE_CONDITIONS:
      return Object.assign({}, state, {
        isFetching: false,
        items: action.conditions,
        lastUpdated: action.receivedAt
      })
    case ADD_CONDITION:
    case UPDATE_CONDITION:
    case DELETE_CONDITION:
    default:
      return state;
  }
}
