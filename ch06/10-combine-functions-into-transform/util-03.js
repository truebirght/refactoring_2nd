const _ = require('lodash');

function calculateBaseCharge(aReading) {  // 기본 요금 계산 함수
  return baseRate(aReading.month, aReading.year) * aReading.quantity;
}

// taxableCharge를 변환함수로 옮긴다
function enrichReading(original) {
  const result = _.cloneDeep(original);
  result.baseCharge = calculateBaseCharge(result);
  result.taxableCharge = Math.max(0, result.baseCharge - taxThreshold(result.year));
  return result;
}

const baseRate = (m, y) => m;

const taxThreshold = y => 0;

module.exports = {
  enrichReading
}