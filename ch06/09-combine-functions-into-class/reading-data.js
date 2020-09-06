const reading = {customer: "ivan", quantity: 10, month: 5, year: 2017};

function acquireReading() {
  return Object.assign({}, reading);
}

module.exports = {acquireReading}