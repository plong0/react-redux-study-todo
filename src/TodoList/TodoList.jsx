import React from 'react';
import TodoItem from './TodoItem';

import './TodoList.css';

class TodoList extends React.Component {
  render() {
    const todoItems = this.renderItems(this.props.items);
    return (
      <ul className="todo-list">
        {todoItems}
      </ul>
    );
  }
  renderItems(items) {
    return items.map(item => (
      <li key={item.id}>
        <TodoItem item={item} />
      </li>
    ));
  }
}

export default TodoList;
