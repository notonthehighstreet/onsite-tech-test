import React from 'react';
import { shallow } from 'enzyme';
import Product from './';

describe('Product component suite', () => {
  const mockProduct = {
    image: 'url',
    altText: 'alt text',
    title: 'title',
    price: 1,
    id: 1,
  };

  let wrapper;
  let fakeAdd = jest.fn();

  beforeEach(() => {
    wrapper = shallow(<Product productData={mockProduct} add={fakeAdd} />);
  });

  it('renders the product image name', () => {
    const image = wrapper.find('.product_image');
    expect(image.prop('src')).toBe(mockProduct.image);
    expect(image.prop('alt')).toBe(mockProduct.altText);
  });

  it('renders product name', () => {
    expect(wrapper.text()).toMatch(mockProduct.title);
  });

  it('renders product price', () => {
    expect(wrapper.text()).toMatch(`£${mockProduct.price}`);
  });

  it('calls the add when clicking', () => {
    wrapper.find('.add_to_basket').simulate('click');
    expect(fakeAdd).toHaveBeenCalledWith(mockProduct.id);
  });
});
