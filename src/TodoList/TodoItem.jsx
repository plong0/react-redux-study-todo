import React from 'react';

function TodoItem(props) {
  const item = props.item;
  return (
    <div className="todo-item">
      <span className="title">{item.title}</span>
    </div>
  );
}

export default TodoItem;
