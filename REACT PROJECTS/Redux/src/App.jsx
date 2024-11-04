import React from 'react';
import './App.css';
import Todos from './components/Todos';
import AddTodo from './components/AddTodo';


const App = () => {
  return (
    <div className='App'>
      <AddTodo/>
      <Todos/>
     
    </div>
  )
}

export default App