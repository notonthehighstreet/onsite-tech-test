import BasketModel from './basketModel';

describe('BasketModel suite', () => {
  const model = BasketModel;

  it('Expect model to be initialised ', () => {
    expect(model).toMatchSnapshot();
  });

  describe('Should create BasketItems and store them when adding', () => {
    const mockItem = { id: 1, price: 1 };

    beforeAll(async () => {
      spyOn(BasketModel, 'calculateTotalPrice').and.callThrough();
      await model.addToBasket(mockItem);
    });

    describe('Basket should now have an item and an updated cost ', () => {
      it('Adds an item to the basket ', () => {
        expect(model.items).toMatchSnapshot();
      });

      it('Recalculates the cost when an item is added', () => {
        expect(model.calculateTotalPrice).toHaveBeenCalled();
        expect(model.totalPrice).toBe(1);
      });
    });
  });
});
