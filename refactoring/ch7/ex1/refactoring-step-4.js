// 쓰기 예
customerData[customerID].usages[year][month] = amount

// 읽기 예
function compareUsage(customerID, laterYear, month) {
  const later = customerData[customerID].usages[laterYear][month]
  const earlier = customerData[customerID].usages[laterYear - 1][month]
  return { laterAmount: later, charge: later - earlier }
}
