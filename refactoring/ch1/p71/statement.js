import createStatementData from './createStatementData.js'

function statement(invoice, plays) {
  return renderPlayText(createStatementData(invoice, plays))
}

function renderPlayText(data, plays) {
  let result = `청구 내역 (고객명: for ${data.customer})\n`
  for (let perf of data.performances) {
    result += ` ${playFor(perf).name}: ${usd(amountFor(perf))} (${
      perf.audience
    }석\n)`
  }
  result += `총액: ${usd(totalAmount())}\n`
  result += `적립 포인트: ${totalVolumeCredits()}점\n`
  return result
}

function htmlStatement(invoice, plays) {
  return renderHtml(createStatementData(invoice, plays))
}

function renderHtml(data) {
  let result = `<h1>청구 내역 (고객명: ${data.customer})</h1>\n`
  result += '<table>\n'
  result += '<tr><th>연극</th><th>좌석 수</th><tr>금액</tr></tr>'
  for (let perf of data.performances) {
    result += ` <tr><td>${perf.play.name}</td><td>(${perf.audience}석)</td></tr>`
    result += `<td>${usd(perf.amount)}</td></tr>\n`
  }
  result += '</table>'
  result += `<p>총액: <em>${usd(data.totalAmount)}</em></p>\n`
  result += `<p>적립 포인트: <em>${data.totalVolumeCredits}</em>점</p>\n`
  return result
}

function usd(aNumber) {
  return new Intl.NumberFormat('en_US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 2,
  }).format(aNumber / 100)
}
