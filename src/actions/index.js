export const addNewTodo = (newTask) => ({
  type: 'ADD_NEW_TASK',
  payload: newTask,
})

export const deleteTodo = (id) => ({
  type: 'DELETE_TASK',
  payload: id,
})