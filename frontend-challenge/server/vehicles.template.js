const faker = require('faker');
const _ = require('lodash');

const vehicleTypes = [
  'full_trailer',
  'rigid_truck',
  'box_van',
  'van',
];

const size = _.random(0, 100);

module.exports = new Array(size).fill().map(() => ({
  id: Number(_.uniqueId()),
  plate_number: faker.random.alphaNumeric(6).toUpperCase(),
  type: _.sample(vehicleTypes),
}));
