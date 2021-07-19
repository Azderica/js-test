// 쓰기 예
customerData[customerID].usages[year][month] = amount

// 읽기 예
function compareUsage(customerID, lateYear, month) {
  const later = customerData[customerID].usages[lateYear][month]
  const earlier = customerData[customerID].usages[lateYear - 1][month]
  return { laterAmount: later, charge: later - earlier }
}
