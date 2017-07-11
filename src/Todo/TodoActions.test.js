import {
  ADD_TODO,
  TOGGLE_TODO,
  addTodo,
  toggleTodo,
} from './TodoActions';

let testDescription = 'Test the addTodo action';
let testId = 1;

test('addTodo returns an action of type equal to ADD_TODO', () => {
  let action = addTodo(testDescription);
  expect(action.type).toBe(ADD_TODO);
});
test(`addTodo returns an action with description property equal to "${testDescription}"`, () => {
  let action = addTodo(testDescription);
  expect(action.description).toBe(testDescription);
});

test('toggleTodo returns an action of type TOGGLE_TODO', () => {
  let action = toggleTodo(testId);
  expect(action.type).toBe(TOGGLE_TODO);
});
test(`toggleTodo returns an action with id property equal to "${testId}"`, () => {
  let action = toggleTodo(testId);
  expect(action.id).toBe(testId);
});
