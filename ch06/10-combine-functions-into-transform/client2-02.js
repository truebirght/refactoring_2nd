const { acquireReading } = require('./reading-data')
const { enrichReading , taxThreshold} = require('./util-02')

const rawReading = acquireReading();
const aReading = enrichReading(rawReading);
const taxableCharge = Math.max(0, aReading.baseCharge - taxThreshold(aReading.year));

module.exports = {
  base: aReading.baseCharge,
  taxableCharge
}