import getDriversPerVehicle from '../utils';

function fetchDataRequest() {
  return {
    type: 'FETCH_DATA_REQUEST',
  };
}

function fetchDataSuccess(data) {
  return {
    type: 'FETCH_DATA_SUCCESS',
    payload: data,
  };
}

function fetchDataError(err) {
  return {
    type: 'FETCH_DATA_ERROR',
    payload: err,
  };
}

function getDrivers(drivers) {
  return {
    type: 'GET_DRIVERS',
    payload: drivers,
  };
}

export function fetchData() {
  return (dispatch) => {
    dispatch(fetchDataRequest());
    return fetch('http://localhost:3000/drivers')
      .then((res) =>  res.json())
      .then((res) => {
        const drivers = res;
        fetch('http://localhost:3000/vehicles')
          .then((res) => res.json())
          .then((res) => {
            const vehicles = res;
            dispatch(fetchDataSuccess({ drivers, vehicles }));
            const dirversPerVehicle = getDriversPerVehicle(drivers, vehicles);
            dispatch(getDrivers(dirversPerVehicle));
          })
          .catch(err => dispatch(fetchDataError(err)));
      });
  };
}

export function changeDriverFilter(filter) {
  return {
    type: 'CHANGE_DRIVER_FILTER',
    payload: filter,
  };
}

