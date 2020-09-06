const { acquireReading } = require('./reading-data')
const { baseRate, enrichReading} = require('./util-01')

const rawReading = acquireReading();  // 미가공 측정값
const aReading = enrichReading(rawReading);
const basicChargeAmount = calculateBaseCharge(aReading);

function calculateBaseCharge(aReading) {  // 기본 요금 계산 함수
  return baseRate(aReading.month, aReading.year) * aReading.quantity;
}

module.exports = {basicChargeAmount}
