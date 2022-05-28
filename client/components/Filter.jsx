import React, { Component } from 'react';
import { connect } from 'react-redux';
// import from child components...

const mapStateToProps = state => ({

});

const mapDispatchToProps = dispatch => ({
  // add action creators
});

class Filter extends Component {
  render() {
    return(
      <div>Filter Component</div>
    );
  }
}
export default Filter;
// export default connect(mapStateToProps, mapDispatchToProps)(Filter);