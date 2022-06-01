import React, { Component } from 'react';
import { connect } from 'react-redux';
// import from child components...
import Restaurant from '../Restaurant.jsx';

import { getRestaurants } from '../../actions/restaurantActionCreator.jsx';


class DisplayContainer extends Component {

  componentDidMount() {
  }

  render() {
    // return value of restaurants reducer;
    const restaurants = this.props.restaurants.restaurantsToBeDisplayed;
    const restaurantsArr = [];
    // console.log(restaurants);
     
    for (let i = 0; i < restaurants.length; i++) {
      const { id, name, price, rating, location, image_url} = restaurants[i];
      restaurantsArr.push(<Restaurant imgUrl={image_url} name={name} address={location.display_address} price={price} rating={rating} />);
    }
    

    return (
      <>
        <h1 className="restaurants-title">Restaurants</h1>
        <div className="Display">
          {restaurantsArr}
        </div>
      </>
    ); 
  }
}

function mapStateToProps(state) {
  return state;
}

export default connect(mapStateToProps, { getRestaurants } )(DisplayContainer);