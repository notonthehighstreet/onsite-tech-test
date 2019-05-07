import React from 'react';
import { shallow } from 'enzyme';
import Product from './';

describe('Product component suite', () => {
  const mockProduct = {
    image: 'url',
    alt: 'alt text',
    title: 'title',
    price: 1,
    id: 1,
  };

  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Product productData={mockProduct} />);
  });

  it('renders item name', () => {
    expect(wrapper.text()).toMatch(mockProduct.title);
  });

  // it('renders the formatted price', () => {
  //   expect(wrapper.text()).toMatch('£12.34');
  // });
});
