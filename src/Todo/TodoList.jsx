import React from 'react';
import PropTypes from 'prop-types';
import TODO from './constants.js';
import Todo from './Todo';
import './Todo.css';

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
        <Todo description={item.description} status={item.status} />
      </li>
    ));
  }
}

TodoList.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      description: PropTypes.string.isRequired,
      status: PropTypes.oneOf(Object.values(TODO.STATUS)),
    }).isRequired
  ).isRequired,
}

export default TodoList;
