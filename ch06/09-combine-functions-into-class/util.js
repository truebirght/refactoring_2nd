const mockingBaseRate = (m, y) => m;

const mockingTaxThreshold = y => 0;

module.exports = {
  baseRate: mockingBaseRate,
  taxThreshold: mockingTaxThreshold
}