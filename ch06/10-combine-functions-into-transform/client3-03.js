const _ = require('lodash');
const { acquireReading } = require('./reading-data')
const { enrichReading} = require('./util-02')

const rawReading = acquireReading();
const aReading = enrichReading(rawReading);
const basicChargeAmount = aReading.baseCharge;

module.exports = {basicChargeAmount}
