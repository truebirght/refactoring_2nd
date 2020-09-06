const _ = require('lodash');

function calculateBaseCharge(aReading) {  // 기본 요금 계산 함수
  return baseRate(aReading.month, aReading.year) * aReading.quantity;
}

// calculateBaseCharge를 부가 정보를 덧붙이는 코드 근처로 옮긴다
function enrichReading(original) {
  const result = _.cloneDeep(original);
  result.baseCharge = calculateBaseCharge(result);  // 미가공 측정값에 기본 소비량을 부가 정보로 덧붙임
  return result;
}

const baseRate = (m, y) => m;

const mockingTaxThreshold = y => 0;

module.exports = {
  enrichReading,
  taxThreshold: mockingTaxThreshold
}