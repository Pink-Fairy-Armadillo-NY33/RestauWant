import React, { Component } from 'react';
import { connect } from 'react-redux';
// import from child components...
import Restaurant from '../components/Restaurant.jsx';

class DisplayContainer extends Component {

  render() {
    return (
      <div>
        Display Container
        <Restaurant />
      </div>
    ); 
  }
}

export default DisplayContainer;