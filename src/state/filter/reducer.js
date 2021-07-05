import * as filterTypes from './types';

export default function reducer(state, action){
  switch(action.type){
    case filterTypes.TOGGLE_FILTER:
      return action.payload.filter
    default:
      throw new Error()
  }
}