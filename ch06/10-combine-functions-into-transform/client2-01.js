const { acquireReading } = require('./reading-data')
const { baseRate , taxThreshold} = require('./util-01')

const aReading = acquireReading();
const base = baseRate(aReading.month, aReading.year) * aReading.quantity;
const taxableCharge = Math.max(0, base - taxThreshold(aReading.year));

module.exports = { base, taxableCharge }