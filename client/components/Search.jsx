import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions/restaurantActionCreator.jsx';
// import from child components...

// const mapStateToProps = state => ({

// });

const mapDispatchToProps = dispatch => ({
  // add action creators
  getRestaurants: (params) => dispatch(actions.getRestaurants)

});



class Search extends Component {
  constructor() {
    super();
    this.state = {params: ''};
    this.search = this.search.bind(this);
  }

  search(event) {
    this.setState({params: event.target.value});
  }

  render() {

    //   return (
    //     <div></div>
    //   );
    // }
    
    return (
      <div>
        Search Component
        <input 
          type="text"
          id="searchBar"
          placeholder="What do you want to eat?"
          value={this.state.params} 
          onChange={this.search}
        >
        </input>
        <br></br><br></br>
        <button 
          id="getRestaurantButton" 
          onClick={() => this.props.getRestaurants(this.state.params)}
        >find eats!
        </button> 

      </div>
    );
    
  }
}

// export default Search;
export default connect(null, mapDispatchToProps)(Search);