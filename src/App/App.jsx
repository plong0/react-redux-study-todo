import React from 'react';
import {TodoList} from '../TodoList';

import './App.css';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      todoItems: [
        {
          id: 1,
          title: 'First thing to do',
        },
        {
          id: 2,
          title: 'Another thing to do',
        },
        {
          id: 3,
          title: 'Then do this',
        },
        {
          id: 4,
          title: 'Finally this one',
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
