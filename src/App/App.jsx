import React from 'react';
import { combineReducers } from 'redux';
import {TodoList, AddTodo, TodoReducers} from '../Todo';
import './App.css';

var reducers =Object.assign({}, TodoReducers);
export const AppReducers = combineReducers(reducers);

class App extends React.Component {
  render() {
    return (
      <div className="app">
        <h1>Todo List Demo</h1>
        <AddTodo />
        <TodoList />
      </div>
    );
  }
}

export default App;
