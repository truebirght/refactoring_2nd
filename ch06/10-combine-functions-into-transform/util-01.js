const _ = require('lodash');

function enrichReading(original) {
  const result = _.cloneDeep(original);
  return result;
}
const mockingBaseRate = (m, y) => m;

const mockingTaxThreshold = y => 0;

module.exports = {
  enrichReading,
  baseRate: mockingBaseRate,
  taxThreshold: mockingTaxThreshold
}