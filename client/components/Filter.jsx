import React, { Component } from 'react';
import { connect } from 'react-redux';
// import RestaurantsReducer from '../reducers/RestaurantsReducer.jsx'
//import mongoose.model('Restaurant', restaurantSchema);
// import from child components...

const mapStateToProps = state => ({
// need to access the store
  categories: state.restaurants.categories,
  selectedCategories: state.restaurants.selectedCategories,

});

const mapDispatchToProps = dispatch => ({
  // add action creators
});

class Filter extends Component {
  constructor(props) {
    super();
  }
  // super(props)
  /*
    this.state.props={
        Name: this.props.name,
        Price: this.props.price,
        Rating: this.props.rating
    }*/
  render() {
    return ( <div>Filter  </div>);
    /*
    return(   
    <>
    <div className="d-flex justify-content-center">
      {menuItems.map((Val, id) => {
        return (
          <button
            className="btn-dark text-white p-1 px-2 mx-5 btn fw-bold"
            onClick={() => filterItem(Val)}
            key={id}
          >
            {Val}
          </button>
        );
      })}
      <button
        className="btn-dark text-white p-1 px-3 mx-5 fw-bold btn"
        onClick={() => setItem(Data)}
      >
        All
      </button> 
     </div>
  </>
    );
    */
  }
}

export default Filter;

// export default connect(mapStateToProps, mapDispatchToProps)(Filter);