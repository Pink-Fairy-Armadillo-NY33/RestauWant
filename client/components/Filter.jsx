import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setCategories } from '../actions/restaurantActionCreator.jsx';
// import RestaurantsReducer from '../reducers/RestaurantsReducer.jsx'
//import mongoose.model('Restaurant', restaurantSchema);
// import from child components...

class Filter extends Component {
  
  constructor(props) {
    super();
    this.onCheckboxChange = this.onCheckboxChange.bind(this);
  }

  onCheckboxChange(event) {
    console.log(event.target.name);
    console.log(event.target.checked);
  }

  render() {
    return (
      <div className="ui checkbox">
        <input type="checkbox" name={this.props.category} onChange={ this.onCheckboxChange } checked={this.props.value}/>
        <label htmlFor={this.props.category}>{this.props.category}</label>
      </div>
    );
  }
}

export default connect(null, { setCategories })(Filter);