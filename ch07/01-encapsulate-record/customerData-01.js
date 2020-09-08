const { customerData } = require('./customerMap')
const _ = require('lodash')

function compareUsage(customerID, laterYear, month) {
    const later = customerData[customerID].usages[laterYear][month];
    const earlier = customerData[customerID].usages[laterYear - 1][month];
    return { laterAmount: later, change: later - earlier };
}

function setUsage(customerID, year, month, amount) {
    customerData[customerID].usages[year][month] = amount;
}

module.exports = {compareUsage, setUsage};