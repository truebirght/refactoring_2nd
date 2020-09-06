const { acquireReading } = require('./reading-data');
const { baseRate } = require('./util');
const {Reading} = require('./Reading');

const rawReading = acquireReading();
const aReading = new Reading(rawReading);
const basicChargeAmount = aReading.baseCharge;


module.exports = { basicChargeAmount }