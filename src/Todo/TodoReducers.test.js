import TodoReducers from './TodoReducers';

test('TodoReducers should contain a todoItems reducer', () => {
  expect(TodoReducers).toHaveProperty('todoItems');
});
