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
    this.props.setCategories(event.target.name, event.target.checked);
  }

  render() {
    return (
      <li className="ui checkbox" style={{ display: 'inline-block', width: '33.3333%'}}>
        <input type="checkbox" name={this.props.category} onChange={ this.onCheckboxChange } checked={this.props.value}/>
        <label htmlFor={this.props.category}>{this.props.category}</label>
      </li>
    );
  }
}

export default connect(null, { setCategories })(Filter);