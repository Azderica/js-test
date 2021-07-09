reading = { customer: 'ivan', quantity: 10, month: 5, year: 2017 }

function enrichReading(argReading) {
  const aReading = _.cloneDeep(argReading)
  aReading.baseCharge = base(aReading)
  aReading.taxableCharge = taxableCharge(aReading)
  return aReading
}

// 클라이언트 1
const aReading = acquireReading()
const baseCharge = aReading.baseCharge

// 클라이언트 2
const aReading = acquireReading()
const base = baseRate(aReading.month, aReading.year) * aReading.quantity
const taxableCharge = Math.max(0, base - taxThreshold(aReading.year))

// 클라이언트 3
const rawReading = acquireReading()
const aReading = enrichReading(rawReading)
const basicChargeAmount = calculateBaseCharge(aReading)
