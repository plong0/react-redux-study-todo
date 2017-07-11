import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import TODO from './TodoConstants';
import { makeGetTodoItemsState } from './TodoSelectors';
import Todo from './Todo';
import './Todo.css';

class TodoList extends React.Component {
  render() {
    const todoItems = this.renderItems(this.props.items);
    const summary = 'Listing '+todoItems.length+' thing'+((todoItems.length !== 1)?'s':'')+' to do';
    return (
      <div className="todo-list">
        <p className="summary">{summary}</p>
        <ul>
          {todoItems}
        </ul>
      </div>
    );
  }
  renderItems(items) {
    return items.map(item => (
      <li key={item.id}>
        <Todo id={item.id} description={item.description} status={item.status} />
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

// export for testing
export {TodoList};

// connect to Redux Store
function makeMapStateToProps(state) {
  const getTodoItemsState = makeGetTodoItemsState();
  const mapStateToProps = state => {
    return {
      items: getTodoItemsState(state)
    };
  };
  return mapStateToProps;
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({}, dispatch);
}

export default connect(makeMapStateToProps, mapDispatchToProps)(TodoList);
