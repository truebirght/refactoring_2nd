const { customerData : customerMap } = require('./customerMap')

class CustomerData {
    constructor(data){
        this._data = data;
    }

}

function getCustomerData(){
    return customerData;
}

function compareUsage(customerID, laterYear, month) {
    const later = getRawDataOfCustomers()[customerID].usages[laterYear][month];
    const earlier = getRawDataOfCustomers()[customerID].usages[laterYear - 1][month];
    return { laterAmount: later, change: later - earlier };
}

function setUsage(customerID, year, month, amount) {
    getRawDataOfCustomers()[customerID].usages[year][month] = amount;
}

function getRawDataOfCustomers() {
    return customerData._data;
}

function setRawDataOfCustomers(arg){
    customerData = new CustomerData(arg);
}

setRawDataOfCustomers(customerMap);

module.exports = {compareUsage, setUsage};