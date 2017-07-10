import React from 'react';
import { shallow } from 'enzyme';
import Todo from './Todo';
import TODO from './constants';

let item;
beforeAll(() => {
  item = {
    id: 1,
    description: 'Test To-do',
    status: TODO.STATUS.COMPLETE
  };
});

test('renders without crashing', () => {
  shallow(<Todo description={item.description} />);
});
