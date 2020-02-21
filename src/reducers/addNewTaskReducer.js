const todoList = (state=[{}], action) => {
  switch(action.type) {
    case 'ADD_NEW_TASK':
      return [...state, action.payload]
    case 'DELETE_TASK':
      return [...state.filter(task => task.id !== action.payload)]
    default:
      return state
  }
}

export default todoList