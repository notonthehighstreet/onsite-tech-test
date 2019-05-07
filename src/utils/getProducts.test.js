import getProducts from './getProducts';

test('returns a list of products', async () => {
  const productList = await getProducts();

  expect(productList.length).toBe(2);
  expect(productList).toMatchSnapshot();
});
