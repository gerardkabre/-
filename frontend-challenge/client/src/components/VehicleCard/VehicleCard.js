import React from 'react';

import ReactLoading from 'react-loading';

import boxVanIcon from '../../icons/box-van.svg';
import fullTrailerIcon from '../../icons/full-trailer.svg';
import vanIcon from '../../icons/van.svg';
import rigidTruckIcon from '../../icons/rigid-truck.svg';

import './VehicleCard.css';

const checkVehicletypeIcon = (input) => {
  if (input === 'van') return vanIcon;
  if (input === 'fullTrailer') return fullTrailerIcon;
  if (input === 'rigidTruck') return rigidTruckIcon;
  if (input === 'semiTrailer') return rigidTruckIcon;
  if (input === 'boxVan') return boxVanIcon;
  return vanIcon;
};

const renderNumberOfDrivers = (arrayOfDrivers) => {
  if (arrayOfDrivers) {
    return arrayOfDrivers.length > 0 ? arrayOfDrivers.length : 'No';
  }
  return 'No';
};

const renderDrivers = (arrayOfDrivers) => {
  if (arrayOfDrivers) {
    return arrayOfDrivers.map(driver => (
      <li className="vehicleCard__DriversList__Item">
        {driver.name}
        <span className="vehicleCard__DriversList__Item-Email">
          {driver.email}
        </span>
      </li>
    ));
  }
};

const VehicleCard = ({ drivers, vehicle, fetching }) => {
  if (fetching) {
    return (
      <div className="vehicleCard">
        <div className="vehicleCard__image">
          <ReactLoading type="spinningBubbles" color="grey" width={'100px'}/>
        </div>
      </div>
    );
  }
  return (
    <div className="vehicleCard">
      <div className="vehicleCard__image">
        <img src={checkVehicletypeIcon(vehicle)} alt="Vehicle Icon" />
      </div>
      <h3 className="vehicleCard__title">
        {renderNumberOfDrivers(drivers)} Drivers
      </h3>
      <ul className="vehicleCard__DriversList">{renderDrivers(drivers)}</ul>
    </div>
  );
};

export default VehicleCard;
