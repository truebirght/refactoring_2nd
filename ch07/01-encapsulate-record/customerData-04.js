const { customerData : customerMap } = require('./customerMap')
const _ = require('lodash');

class CustomerData {
    constructor(data){
        this._data = data;
    }

    setUsage(customerID, laterYear, month, amount) {
        this._data[customerID].usages[year][month] = amount;
    }

    usage(customerID, laterYear, month) {
        return this._data[customerID].usages[year][month];
    }

    get rawData(){
        return _.cloneDeep(this._data);
    }
}

function getCustomerData(){
    return customerData;
}

function compareUsage(customerID, laterYear, month) {
    const later = getCustomerData().usage(customerID,laterYear,month);
    const earlier = getCustomerData().usage(customerID,laterYear - 1,month);
    return { laterAmount: later, change: later - earlier };
}

function setRawDataOfCustomers(arg){
    customerData = new CustomerData(arg);
}

setRawDataOfCustomers(customerMap);

module.exports = {compareUsage, getCustomerData};