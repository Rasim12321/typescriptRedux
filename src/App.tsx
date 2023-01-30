import React from 'react';
import UserList from './components/userList';
import TodoList from './components/todoList';

import './App.css';


function App() {
  return (
    <>
      <UserList/>
      <hr />
      <TodoList/>
    </>
  );
}

export default App;
