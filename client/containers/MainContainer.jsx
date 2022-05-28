import React, { Component } from 'react';
import { connect } from 'react-redux';
// import from child components...
import Search from '../components/Search.jsx';
import DisplayContainer from './DisplayContainer.jsx';
import Filter from '../components/Filter.jsx';
import * as actions from '../actions/types.jsx';

const mapStateToProps = ({
  restaurants: { totalRestaurants }, 
}) => ({
  totalRestaurants   
});



class MainContainer extends Component {

  render() {
    return (
      <div> 
        Main Container
        <Search />
        <Filter />
        <DisplayContainer />
      </div>
    ); 
  }
}

export default MainContainer;