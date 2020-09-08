const { customerData } = require('./customerMap')

function compareUsage(customerID, laterYear, month) {
    const later = getRawDataOfCustomers()[customerID].usages[laterYear][month];
    const earlier = getRawDataOfCustomers()[customerID].usages[laterYear - 1][month];
    return { laterAmount: later, change: later - earlier };
}

function setUsage(customerID, year, month, amount) {
    getRawDataOfCustomers()[customerID].usages[year][month] = amount;
}

function getRawDataOfCustomers() {
    return customerData;
}

function setRawDataOfCustomers(arg){
    customerData = arg;
}
module.exports = {compareUsage, setUsage};