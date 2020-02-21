import { combineReducers } from 'redux'
import counterReducer from './counterReducer'
import isLoggedReducer from './isLoggedReducer'

const rootReducer = combineReducers({
  counter: counterReducer,
  isLogged: isLoggedReducer,
})

export default rootReducer