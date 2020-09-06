const { acquireReading } = require('./reading-data');
const {baseRate, taxThreshold} = require('./util');
const {Reading} = require('./Reading');

const rawReading = acquireReading();
const aReading = new Reading(rawReading);
// const base = aReading.baseRate;
const taxableCharge = taxableChargeFn(aReading);

function taxableChargeFn(aReading) {
    return Math.max(0, aReading.baseCharge - taxThreshold(aReading.year));
}

module.exports = { taxableCharge }