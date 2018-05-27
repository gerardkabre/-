const initialState = {
  drivers: [],
  vehicles: [],
  vanDrivers: [],
  boxVanDrivers: [],
  rigidTruckDrivers: [],
  semiTrailerDrivers: [],
  fullTrailerDrivers: [],
  fetchingData: false,
  searchText: '',
};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_DATA_REQUEST':
      return {
        ...state,
        fetchingData: true,
      };
    case 'FETCH_DATA_SUCCESS':
      return {
        ...state,
        fetchingData: false,
        drivers: action.payload.drivers,
        vehicles: action.payload.vehicles,
      };
    case 'GET_DRIVERS':
      return {
        ...state,
        vanDrivers: action.payload.van,
        boxVanDrivers: action.payload.boxVan,
        rigidTruckDrivers: action.payload.rigidTruck,
        semiTrailerDrivers: action.payload.semiTrailer,
        fullTrailerDrivers: action.payload.fullTrailer,
      };
    case 'CHANGE_DRIVER_FILTER':
      return {
        ...state,
        searchText: action.payload,
      };
    default:
      return { ...state };
  }
};

