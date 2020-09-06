const { acquireReading } = require('./reading-data');
const { baseRate } = require('./util');
const {Reading} = require('./Reading');

const rawReading = acquireReading();
const aReading = new Reading(rawReading);
const basicChargeAmount = calculateBaseCharge(rawReading);

function calculateBaseCharge(aReading) {  // 기본 요금 계산 함수
  return baseRate(aReading.month, aReading.year) * aReading.quantity;
}

module.exports = { basicChargeAmount }