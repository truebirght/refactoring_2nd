const { acquireReading } = require('./reading-data');
const { baseRate } = require('./util');

const aReading = acquireReading();
const basicChargeAmount = calculateBaseCharge(aReading);

function calculateBaseCharge(aReading) {
    return baseRate(aReading.month, aReading.year) * aReading.quantity;
}

module.exports = { basicChargeAmount }