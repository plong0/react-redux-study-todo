import {ADD_TODO, TOGGLE_TODO} from './TodoActions';
import TODO from './TodoConstants';

function todoItems(state = [], action) {
  switch (action.type) {
    case ADD_TODO:
      return [
        ...state,
        {
          id: state.length,
          description: action.description,
          status: TODO.STATUS.INCOMPLETE,
        }
      ];
    case TOGGLE_TODO:
      return state.map(todo => {
        if (todo.id === action.id) {
          let status = action.status;
          if (status == null) {
            status = todo.status === TODO.STATUS.INCOMPLETE ? TODO.STATUS.COMPLETE : TODO.STATUS.INCOMPLETE;
          }
          return Object.assign({}, todo, {
            status: status
          });
        }
        return todo;
      })
    default:
      return state;
  }
}

const TodoReducers = {
  todoItems,
};

export default TodoReducers;
