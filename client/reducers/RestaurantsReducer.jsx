import * as types from '../actions/types.jsx';


const initialState = {
  restaurantsToBeDisplayed: [],
  restaurantsNotDisplayed: [],
  categories: {},
};

const RestaurantsReducer = (state = initialState, action) => {
  let restaurantsToBeDisplayed, newCategories;

  switch (action.type) {
    case types.GET_RESTAURANTS:
      restaurantsToBeDisplayed = action.payload;
      
      newCategories = {};

      for (let i = 0; i < restaurantsToBeDisplayed.length; i++) {
        const categories = restaurantsToBeDisplayed[i].categories;
        for (let j = 0; j < categories.length; j++) {
          const category = categories[j].title;
          if (!Object.hasOwn(newCategories, category)) {
            newCategories[category] = false;
          }
        }
      }
      console.log(newCategories);
      console.log(restaurantsToBeDisplayed);
      return {
        ...state,
        categories: newCategories,
        restaurantsToBeDisplayed,
        restaurantsNotDisplayed: [],
      };
    
    case types.SET_CATEGORIES:
      console.log(action);
      return state;

    default:
      return state;
  }
};


export default RestaurantsReducer;