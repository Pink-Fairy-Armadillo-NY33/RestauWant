 
import React, { Component } from 'react';
import * as Actions from '../actions/types.jsx';
import { connect } from 'react-redux';


class Restaurant extends Component {
  
  render() {
    return (
      <div>
        <div>Restaurant Component</div>
        <div>Restaurant Name: {this.props.name}</div>
        <div>Price: {this.props.price}</div>
        <div>Rating: {this.props.rating}</div>
      </div>
      
    );
  }
}

export default Restaurant;


/*
 const mapDispatchToProps = dispatch => (
 {
   add_Rest: (restaurantId) => dispatch(Actions.addRestActionCreator(restaurantId)),
   delete_Rest: (restaurantId) => dispatch(Actions.deleteRestActionCreator(restaurantId))
 }
 );
 
 const mapStateToProps = state => ({
   restaurants: state.restaurants
 });
 // adds restaurant
 const Restaurant = props => {
   const handleClickAdd = function (name){
     props.ADD_REST(name);
   }
   // deletes restaurant
 const handleClickDelete = function (name) {
     props.DELETE_REST(name);
   }
  
 
 return(
   <div className="restaurantBox">
     <h3>Restaurant ID: {props.restaurantId}</h3>
     <h3>Location: {props.location}</h3>
     <h3>Stars: {props.stars}</h3>
     <button className="ADD_REST" onClick ={() => handleClickAdd(props.restaurantId)}>Add Restaurant</button> 
     <button className="DELETE_REST" onClick ={() => handleClickDelete(props.restaurantId)}>Delete Restaurant</button>
   </div>
 )
 };
 e
 export default connect(mapStateToProps, mapDispatchToProps)(Restaurant);
 */