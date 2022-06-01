const { internalIP } = require('webpack-dev-server');
const restRenderAll = require('../server/controllers/restaurantController');


describe('restaurantController.getAllRestaurants', () => {
  it('Should have get all restuarants method', () => {
    expect(typeof restRenderAll.getAllRestaurants).toBe('function');
  });
  it('Should have get all restuarants method', () => {
    expect(typeof restRenderAll.getAllRestaurants).toBe('function');
  });
});
