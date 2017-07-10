import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import TODO from './constants.js';

function Todo(props) {
  const description = props.description;
  var todoClass = classNames({
    'todo': true,
    'status-complete': props.status === TODO.STATUS.COMPLETE,
    'status-incomplete': props.status === TODO.STATUS.INCOMPLETE,
  });
  return (
    <div className={todoClass}>
      <span className="description">{description}</span>
    </div>
  );
}

Todo.propTypes = {
  description: PropTypes.string.isRequired,
  status: PropTypes.oneOf(Object.values(TODO.STATUS)),
};

Todo.defaultProps = {
  status: TODO.STATUS.INCOMPLETE
};

export default Todo;
