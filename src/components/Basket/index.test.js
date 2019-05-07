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

  const totalPrice = '12.34';
  const removeFromBasket = jest.fn();

  let wrapper;

  beforeEach(() => {
    wrapper = shallow(
      <Basket items={[mockItem]} totalPrice={totalPrice} removeFromBasket={removeFromBasket} />
    );
  });

  it('renders item name', () => {
    expect(wrapper.text()).toMatch(mockItem.product.title);
  });

  it('renders item quantity', () => {
    expect(wrapper.text()).toMatch(`${mockItem.quantity}`);
  });

  it('renders the remove x', () => {
    expect(wrapper.find('.remove').text()).toBe('X');
  });

  it('renders the total price', () => {
    expect(wrapper.text()).toMatch('£12.34');
  });
});
