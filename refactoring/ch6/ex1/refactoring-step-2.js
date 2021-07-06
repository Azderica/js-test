function printOwing(invoice) {
  let outstanding = 0

  printBanner()

  // 미해결 채무(outstanding)를 계산합니다.
  for (const o of invoice.orders) {
    outstanding += o.amount
  }

  // 마감일(dueDate)을 기록합니다.
  const today = Clock.today
  invoice.dueDate = new Date(
    today.getFullYear(),
    today.getMonth(),
    today.getDate() + 30
  )

  printDetails()

  function printDetails() {
    // 세부 사항을 출력합니다.
    console.log(`고객명: ${invoice.customer}`)
    console.log(`채무액: ${outstanding}`)
    console.log(`마감일: ${invoice.dueDate.toLocaleDateString()}`)
  }
}

function printBanner() {
  console.log('*****************')
  console.log('**** 고객 채무 ****')
  console.log('*****************')
}
