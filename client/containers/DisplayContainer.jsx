import React, { Component } from 'react';
import { connect } from 'react-redux';
// import from child components...
import Restaurant from '../components/Restaurant.jsx';
import { getAllRestaurants } from '../actions/restaurantActionCreator.jsx';

class DisplayContainer extends Component {

  render() {
    this.props.getAllRestaurants();
    // return value of restaurants reducer;
    const restaurants = this.props.restaurants;
    const restaurantsArr = [];
    for (let i = 0; i < restaurants.length; i++) {
      const { name, price, rating } = restaurants[i];
      restaurantsArr.push(<Restaurant name={name} price={price} rating={rating} />);
    }

    return (
      <div>
        Display Container
        {restaurantsArr}
      </div>
    ); 
  }
}

function mapStateToProps(state) {
  return state;
}

export default connect(mapStateToProps, { getAllRestaurants } )(DisplayContainer);