import { createSelector } from 'reselect';

const getTodoItems = state => state.todoItems;

export const makeGetTodoItemsState = () => createSelector(
  [getTodoItems],
  todoItems => todoItems
);
