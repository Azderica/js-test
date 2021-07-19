class CustomerData {
  constructor(data) {
    this._data = data
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
function compareUsage(customerID, lateYear, month) {
  const later = getRawDataOfCustomers()[customerID].usages[lateYear][month]
  const earlier = getRawDataOfCustomers()[customerID].usages[lateYear - 1][
    month
  ]
  return { laterAmount: later, charge: later - earlier }
}
