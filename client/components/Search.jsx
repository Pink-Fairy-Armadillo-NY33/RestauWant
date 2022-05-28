import React, { Component } from 'react';
import { connect } from 'react-redux';
// import from child components...

const mapStateToProps = state => ({

});

const mapDispatchToProps = dispatch => ({
  // add action creators
});

class Search extends Component {
  render() {
    return (
      <div>Search Component</div>
    );
  }
}

export default Search;
// export default connect(mapStateToProps, mapDispatchToProps)(Search);