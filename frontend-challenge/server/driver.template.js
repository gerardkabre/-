const faker = require('faker');
const _ = require('lodash');
const vehicles = require('./vehicles.template');

const driver = {
  id: () => Number(_.uniqueId()),
  name: () => faker.name.findName(),
  email: () => faker.internet.email(),
  status: (params, query) => query.status,
  vehicles: () => (
    _.sampleSize(vehicles, _.random(0, vehicles.length))
      .reduce((acc, { id }) => [...acc, id], [])
  ),
};

module.exports = driver;
