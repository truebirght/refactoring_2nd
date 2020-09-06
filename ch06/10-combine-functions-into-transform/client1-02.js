const {acquireReading} = require('./reading-data')
const {enrichReading} = require('./util-02')

const rawReading = acquireReading();
const aReading = enrichReading(rawReading);
const baseCharge = aReading.baseCharge;

module.exports = {baseCharge}