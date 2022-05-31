import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions/restaurantActionCreator.jsx';
// import from child components...

// const mapStateToProps = state => ({

// });

const mapDispatchToProps = dispatch => ({
  // add action creators
  getRestaurants: (params) => {
    dispatch(actions.getRestaurants(params));
  } 
});


class Search extends Component {
  constructor(props) {
    super(props);
    // searching by just zip for now
    this.state = {
      location: ''
    };
    this.search = this.search.bind(this);
  }

  search(event) {
    this.setState({location: event.target.value});
  }

  render() {

    return (
      <div className = "Search">
        {/* Search Component */}
        <input 
          type="text"
          id="searchBar"
          placeholder="Where are you?"
          // location (zip) search box
          value={this.state.location} 
          onChange={this.search}
        >
        </input>
        <br></br><br></br>
        <button id="getRestaurantButton" 
          onClick={() => {
            this.props.getRestaurants(this.state);
          }
          }
        >find eats!
        </button> 

      </div>
    );
    
  }
}

// export default Search;
export default connect(null, mapDispatchToProps)(Search);