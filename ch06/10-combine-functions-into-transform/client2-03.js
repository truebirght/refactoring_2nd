const { acquireReading } = require('./reading-data')
const { enrichReading } = require('./util-03')

const rawReading = acquireReading();
const aReading = enrichReading(rawReading);
const taxableCharge = aReading.taxableCharge;

module.exports = {
  taxableCharge
}