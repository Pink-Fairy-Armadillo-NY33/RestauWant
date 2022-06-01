const { internalIP } = require('webpack-dev-server');
// Importing the methods we need to test
const restRenderAll = require('../server/controllers/restaurantController');
const restSchema = require('../server/models/restaurantModel')
// Mocks HTTP requests with jEST https://www.npmjs.com/package/node-mocks-http
const httpMocks = require('node-mocks-http');

let req, res, next;
// Runs before each test is run
beforeEach(() => {
  req = httpMocks.createRequest();
  req = httpMocks.createResponse();
  next = null;
});

restSchema.create = jest.fn();// Allow Jest to spy on the create method

// Testing our methods
describe('restaurantController.getAllRestaurants', () => {
  it('Should have get all restuarants method', () => {
    expect(typeof restRenderAll.getAllRestaurants).toBe('function');
  });
  it('Expect restaurantModel.create to be called', () => {
    restSchema.create();
    expect(restSchema.create).toBeCalled();
  });


});