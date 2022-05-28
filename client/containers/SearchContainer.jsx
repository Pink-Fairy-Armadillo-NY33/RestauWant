import React, { Component } from 'react';
import { connect } from 'react-redux';
// import from child components...


class SearchContainer extends Component {


  render() {
    return (
      <div>
          Search Container
      </div>
    );  
  }
}



export default connect(mapStateToProps, null)(SearchContainer);