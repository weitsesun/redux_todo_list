import { combineReducers } from 'redux'
import todoList from './addNewTaskReducer'

const rootReducer = combineReducers({
  todoList,
})

export default rootReducer