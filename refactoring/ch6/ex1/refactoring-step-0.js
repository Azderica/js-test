function prinOwing(invoice) {
  printBanner()
  let outstanding = calculateOutstanding()
  printDetails(outstanding)

  // 세부 사항 출력
  function printDetails(outstanding) {
    console.log(`고객명: ${invoice.customer}`)
    console.log(`채무액: ${outstanding}`)
  }
}
