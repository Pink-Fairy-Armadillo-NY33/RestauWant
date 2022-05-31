import React, { Component } from 'react';
import { connect } from 'react-redux';
// import from child components...


class SearchContainer extends Component {


  render() {
    return (
      <div className = "SearchContainer">
          Search Container
      </div>
    );  
  }
}

export default SearchContainer;


// export default connect(mapStateToProps, null)(SearchContainer);