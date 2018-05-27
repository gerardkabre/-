import React, { Component } from 'react';

import { connect } from 'react-redux';

import Title from './components/Title/Title';
import Container from './components/Layout/Container';
import Row from './components/Layout/Row';
import Col from './components/Layout/Col';

import VehicleCardContainer from './containers/VehicleCardContainer';
import SearchFilterContainer from './containers/SearchFilterContainer';

import { fetchData } from './actions/drivers';

class App extends Component {
  componentDidMount() {
    this.props.dispatch(fetchData());
  }

  render() {
    return (
      <Container>
        <Title text="Vehicles" />
        <SearchFilterContainer />
        <Row>
          <Col laptopColumns={3} mobileColumns={1}>
            <VehicleCardContainer drivers="fullTrailerDrivers" vehicle="fullTrailer" />
          </Col>
          <Col laptopColumns={3} mobileColumns={1}>
            <VehicleCardContainer drivers="semiTrailerDrivers" vehicle="semiTrailer" />
          </Col>
          <Col laptopColumns={3} mobileColumns={1}>
            <VehicleCardContainer drivers="rigidTruckDrivers" vehicle="rigidTruck" />
          </Col>
        </Row>
        <Row>
          <Col laptopColumns={3} mobileColumns={1}>
            <VehicleCardContainer drivers="boxVanDrivers" vehicle="boxVan" />
          </Col>
          <Col laptopColumns={3} mobileColumns={1}>
            <VehicleCardContainer drivers="vanDrivers" vehicle="van" />
          </Col>
          <Col laptopColumns={3} mobileColumns={1}>
            <VehicleCardContainer drivers="" vehicle="no" />
          </Col>
        </Row>
      </Container>
    );
  }
}

export default connect()(App);
