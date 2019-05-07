import React from 'react';
import { shallow } from 'enzyme';
import Basket from './';

describe('Basket component suite', () => {
  const mockItem = {
    product: {
      id: '1',
      title: 'test',
    },
    quantity: 1,
  };

  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Basket items={[mockItem]} />);
  });

  it('renders item name', () => {
    expect(wrapper.text()).toMatch(mockItem.product.title);
  });

  // it('renders the formatted price', () => {
  //   expect(wrapper.text()).toMatch('£12.34');
  // });
});
