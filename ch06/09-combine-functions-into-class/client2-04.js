const {acquireReading} = require('./reading-data');
const {baseRate, taxThreshold} = require('./util');
const {Reading} = require('./Reading');

const rawReading = acquireReading();
const aReading = new Reading(rawReading);
const taxableCharge = aReading.taxableCharge;

module.exports = {taxableCharge}