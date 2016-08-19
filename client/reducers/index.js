import { combineReducers } from 'redux'
import myActionReducer from './myActionReducer'

const rootReducer = combineReducers({
  myState: myActionReducer
})

export default rootReducer
