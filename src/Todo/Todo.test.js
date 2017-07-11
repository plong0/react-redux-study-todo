import React from 'react';
import { shallow } from 'enzyme';
import configureStore from 'redux-mock-store';
import Todo from './Todo';
import TODO from './TodoConstants';

const mockStore = configureStore();

let item;
beforeAll(() => {
  item = {
    id: 1,
    description: 'Test To-do',
    status: TODO.STATUS.COMPLETE
  };
});

test('renders without crashing', () => {
  const store = mockStore({});
  shallow(<Todo id={item.id} description={item.description} />, {context: { store }}).dive();
});
