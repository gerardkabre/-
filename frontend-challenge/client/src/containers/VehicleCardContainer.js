import React, { Component } from 'react';
import { connect } from 'react-redux';

import VehicleCard from '../components/VehicleCard/VehicleCard';

class VehicleCardContainer extends Component {
  render() {
    return (
      <VehicleCard
        drivers={this.props.drivers}
        vehicle={this.props.vehicle}
        fetching={this.props.fetching}
      />
    );
  }
}

const getFilteredDrivers = (drivers, filter) => {
  if (drivers) {
    return drivers.filter(driver =>
      driver.name.toUpperCase().startsWith(filter.toUpperCase())
    );
  }
};

const mapStateToProps = (state, ownProps) => {
  return {
    fetching: state.drivers.fetchingData,
    filterValue: state.drivers.searchText,
    drivers: getFilteredDrivers(
      state.drivers[ownProps.drivers],
      state.drivers.searchText
    )
  };
};

export default connect(mapStateToProps)(VehicleCardContainer);
