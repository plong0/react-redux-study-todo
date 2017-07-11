export const ADD_TODO = 'ADD_TODO';
export const TOGGLE_TODO = 'TOGGLE_TODO';

export function addTodo(description) {
  return { type: ADD_TODO, description }
}

export function toggleTodo(id, status) {
  return { type: TOGGLE_TODO, id, status }
}
