import React from 'react';
import './App.css';
import { increment, decrement } from './actions'
import { useSelector, useDispatch } from 'react-redux'


//inside store are reducers, they are functions ready for
//receiving action and return a new state
function App() {
  const counter = useSelector(state => state.counter)
  const dispatch = useDispatch()
  return (
      <div className="App">
        <h1>Redux Todo List</h1>
        <button onClick={() => dispatch(decrement())}>-</button>
        <span>{ counter }</span>
        <button onClick={() => dispatch(increment())}>+</button>
      </div>
  );
}

export default App;
