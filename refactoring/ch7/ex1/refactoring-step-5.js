class CustomerData {
  constructor(data) {
    this._data = data
  }
  usage(customerID, year, month) {
    return this._data[customerID].usages[year][month]
  }
  setUsage(customerID, year, month, amount) {
    getRawDataOfCustomers()[customerID].usages[year][month] = amount
  }
  get rawData() {
    return _.cloneDeep(this._data)
  }
}
function getCustomerData() {
  return customerData
}
function getRawDataOfCustomers() {
  return customerData._data
}
function setRawDataOfCustomers(arg) {
  customerData = new CustomerData(arg)
}

// 쓰기 예
getCustomerData().setUsage(customerID, year, month, amount)

// 읽기 예
function compareUsage(customerID, laterYear, month) {
  const later = getCustomerData().usage(customerID, laterYear, month)
  const earlier = getCustomerData().usage(customerID, laterYear - 1, month)
  return { laterAmount: later, charge: later - earlier }
}
