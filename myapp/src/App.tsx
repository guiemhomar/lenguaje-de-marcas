import React from 'react';
import logo from './logo.svg';
import './App.css';
import TodoList from './components/TodoList';
import TodoButton from './components/TodoButton';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <TodoList/>
        <TodoButton/>
      </header>
    </div>
  );
}

export default App;
