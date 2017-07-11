import {makeGetTodoItemsState} from './TodoSelectors';

test('makeGetTodoItemsState should return a function', () => {
  expect(makeGetTodoItemsState()).toBeInstanceOf(Function);
});
