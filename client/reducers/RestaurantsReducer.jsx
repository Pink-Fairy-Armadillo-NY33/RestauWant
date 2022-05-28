import * as types from '../actions/types.jsx';


const initialState = {
  restaurantsToBeDisplayed: [],
  restaurantsNotDisplayed: [],
  categories: [],
  selectedCategories: []
};

const RestaurantsReducer = (state = initialState, action) => {
  let restaurantsToBeDisplayed;

  switch (action.type) {
    case types.GET_RESTAURANTS:
      restaurantsToBeDisplayed = action.payload;
      console.log(restaurantsToBeDisplayed);
      return {
        ...state,
        restaurantsToBeDisplayed
      };

    default:
      return state;
  }
};


export default RestaurantsReducer;