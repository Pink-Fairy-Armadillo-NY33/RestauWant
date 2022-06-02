/* eslint-disable react/jsx-no-target-blank */
 
import React, { Component } from 'react';
import * as Actions from '../actions/types.jsx';
import { connect } from 'react-redux';


class Restaurant extends Component {
  
  render() {
    const captainUnderpants = 'http://www.talkingwithtami.com/wp-content/uploads/2022/02/Turning_Red_OOH_Expres_287_Happy_MASTER_v3.0_Mech1_FS-scaled.jpg';
    return (
      // <div className="restaurant">
      //   <div className="restImage">
      //     <img 
      //       src={this.props.imgUrl} 
      //       alt="restaurant"
      //       style={{width: '100%', maxHeight: '200px'}}
      //     />
      //   </div>
      //   <div>Restaurant Name: {this.props.name}</div>
      //   <div>Address:</div>
      //   <div>{this.props.address.join(' ')}</div>
      //   <div>Price: {this.props.price}</div>
      //   <div>Rating: {this.props.rating}</div>
      // </div>
      <div className="restaurant-card">
        <div className="restaurant-img-container">
          <img className="restaurant-img"src={this.props.imgUrl ? this.props.imgUrl : captainUnderpants} alt="" />
        </div>
        <div className="restaurant-info">
          <h2 className="restaurant-name">{this.props.name}</h2>
          <p className="restaurant-address">{this.props.address.join(' ')}</p>
          <div className="rate-price-container">
            <p className="restaurant-rating">Rating: {this.props.rating}/5</p>
            <p className="restaurant-price">{this.props.price}</p>
          </div>
        </div>
        <div className="restaurant-buttons">
          <a className="website-btn" href={`${this.props.site}`} target="_blank">Visit Website</a>
          <a className="phone-btn" href={`tel:${this.props.phone}`}>Call Restaurant</a>
        </div>
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