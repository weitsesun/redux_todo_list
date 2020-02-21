import React from 'react';
import './App.css';
import { addNewTodo, deleteTodo } from './actions'
import { useSelector, useDispatch } from 'react-redux'
import { useState } from 'react'
import uuidV4 from 'uuid/v4'


//inside store are reducers, they are functions ready for
//receiving action and return a new state
function App() {
  const [newTask, setNewTask] = useState('')

  const todoList = useSelector(state => state.todoList)
  const dispatch = useDispatch()
  return (
    <div className="App">
      <form className="submitForm">
        <input className='submitText' type='text' onChange={(e) => setNewTask(e.target.value)} value={newTask} />
        <button type='submit'
          className="submitButton"
          onClick={(e) => {
            e.preventDefault()
            if(newTask === '') return;
            dispatch(addNewTodo({ content: newTask, id: uuidV4() }))
            setNewTask('')
          }}>Submit</button>
      </form>
      {
        todoList.map(task =>
          <div className='singleTask' key={task.id} onClick={() => dispatch(deleteTodo(task.id))}>{task.content}</div>)
      }
    </div>
  );
}

export default App;
