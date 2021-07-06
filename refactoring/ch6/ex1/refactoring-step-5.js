function printOwing(invoice) {
  printBanner()

  let outstanding = calculateOutStanding(invoice)

  recordDueDate(invoice)
  printDetails(invoice, outstanding)
}

function printBanner() {
  console.log('*****************')
  console.log('**** 고객 채무 ****')
  console.log('*****************')
}

function calculateOutStanding(invoice) {
  let result = 0
  for (const o of invoice.orders) {
    result += o.amount
  }
  return result
}

function recordDueDate(invoice) {
  // 마감일(dueDate)을 기록합니다.
  const today = Clock.today
  invoice.dueDate = new Date(
    today.getFullYear(),
    today.getMonth(),
    today.getDate() + 30
  )
}

function printDetails(invoice, outstanding) {
  // 세부 사항을 출력합니다.
  console.log(`고객명: ${invoice.customer}`)
  console.log(`채무액: ${outstanding}`)
  console.log(`마감일: ${invoice.dueDate.toLocaleDateString()}`)
}
