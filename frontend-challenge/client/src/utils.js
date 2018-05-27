// Saves the vehicles ID's by type of vehicle & then checks matches between them and the
// id's from the driver vehicles to know the vehicles he drives and adds him as a driver.
export default function getDriversPerVehicle(drivers, vehicles) {
  const vanIds = [];
  const boxVanIds = [];
  const rigidTruckIds = [];
  const semiTrailerIds = [];
  const fullTrailerIds = [];

  const vanDrivers = [];
  const boxVanDrivers = [];
  const rigidTruckDrivers = [];
  const semiTrailerDrivers = [];
  const fullTrailerDrivers = [];

  vehicles.map((vehicle) => {
    switch (vehicle.type) {
      case 'van':
        vanIds.push(vehicle.id);
        break;
      case 'box_van':
        boxVanIds.push(vehicle.id);
        break;
      case 'rigid_truck':
        rigidTruckIds.push(vehicle.id);
        break;
      case 'semi_trailer':
        semiTrailerIds.push(vehicle.id);
        break;
      case 'full_trailer':
        fullTrailerIds.push(vehicle.id);
        break;
      default:
    }
  });

  drivers.map((driver) => {
    driver.vehicles.map((vehicleId) => {
      if (vanIds.includes(vehicleId) && !vanDrivers.includes(driver)) {
        vanDrivers.push(driver);
      }
      if (boxVanIds.includes(vehicleId) && !boxVanDrivers.includes(driver)) {
        boxVanDrivers.push(driver);
      }
      if (rigidTruckIds.includes(vehicleId) && !rigidTruckDrivers.includes(driver)) {
        rigidTruckDrivers.push(driver);
      }
      if (semiTrailerIds.includes(vehicleId) && !semiTrailerDrivers.includes(driver)) {
        semiTrailerDrivers.push(driver);
      }
      if (fullTrailerIds.includes(vehicleId) && !fullTrailerDrivers.includes(driver)) {
        fullTrailerDrivers.push(driver);
      }
    });
  });

  return {
    van: vanDrivers,
    boxVan: boxVanDrivers,
    semiTrailer: semiTrailerDrivers,
    rigidTruck: rigidTruckDrivers,
    fullTrailer: fullTrailerDrivers,
  };
}
