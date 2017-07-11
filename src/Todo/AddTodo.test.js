import React from 'react';
import { shallow } from 'enzyme';
import configureStore from 'redux-mock-store';
import AddTodo from './AddTodo.jsx';

const mockStore = configureStore();

test('renders without crashing', () => {
  const store = mockStore({});
  shallow(<AddTodo />, {context: { store }}).dive();
});
