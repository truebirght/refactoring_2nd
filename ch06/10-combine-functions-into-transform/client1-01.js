const {acquireReading} = require('./reading-data')
const {baseRate} = require('./util-01')

const aReading = acquireReading();
const baseCharge = baseRate(aReading.month, aReading.year) * aReading.quantity;

module.exports = {baseCharge}