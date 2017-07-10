import React from 'react';
import {TODO, TodoList} from '../Todo';
import './App.css';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      todoItems: [
        {
          id: 1,
          description: 'First thing to do',
          status: TODO.STATUS.INCOMPLETE,
        },
        {
          id: 2,
          description: 'Another thing to do',
          status: TODO.STATUS.COMPLETE,
        },
        {
          id: 3,
          description: 'Then do this',
          status: TODO.STATUS.INCOMPLETE,
        },
        {
          id: 4,
          description: 'Finally this one',
          status: TODO.STATUS.INCOMPLETE,
        },
      ]
    };
  }
  render() {
    return (
      <div className="app">
        <h1>Todo List Demo</h1>
        <TodoList items={this.state.todoItems} />
      </div>
    );
  }
}

export default App;
