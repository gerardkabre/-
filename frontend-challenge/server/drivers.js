const _ = require('lodash');
const driver = require('./driver.template');

module.exports = {
  path: '/drivers',
  template: driver,
  size: () => _.random(0, 100),
  collection: true,
  delay: [500, 2000],
  cache: false,
};
