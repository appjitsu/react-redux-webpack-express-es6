import { MY_ACTION } from '../actions/types'
const INITIAL_STATE = {
  a_property: "somevalue"
}

export default function(state = INITIAL_STATE, action) {
  switch(action.type){
    case MY_ACTION:
      return Object.assign({}, action.payload)
    default:
      return state
  }
  return state
}
