import React from 'react';
import { shallow } from 'enzyme';
import TodoList from './TodoList';
import TODO from './constants';

let items;
beforeAll(() => {
  items = [
    {
      id: 1,
      description: 'First thing to do',
      status: TODO.STATUS.INCOMPLETE,
    },
    {
      id: 2,
      description: 'Another thing to do',
      status: TODO.STATUS.COMPLETE,
    },
    {
      id: 3,
      description: 'Then do this',
      status: TODO.STATUS.INCOMPLETE,
    },
    {
      id: 4,
      description: 'Finally this one',
      status: TODO.STATUS.INCOMPLETE,
    },
  ];
});

test('renders without crashing', () => {
  shallow(<TodoList items={items} />);
});
