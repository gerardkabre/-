import React, { Component } from 'react';
import { connect } from 'react-redux';

import SearchFilter from '../components/SearchFilter/SearchFilter';

import { changeDriverFilter } from '../actions/drivers';

class SearchFilterContainer extends Component {
  render() {
    return (
      <SearchFilter
        value={this.props.filterValue}
        onSearch={input => this.props.dispatch(changeDriverFilter(input))}
      />
    );
  }
}

const mapStateToProps = (state) => {
  return {
    filterValue: state.drivers.searchText
  };
};

export default connect(mapStateToProps)(SearchFilterContainer);
