// before
const orderDate = orderString.split(/\s+/)
const productPrice = priceList[orderDate[0].split('-')[1]]
const orderPrice = parseInt(orderDate[1]) * productPrice

// after
const orderRecord = parseOrder(order)
const orderPrice = price(orderRecord, priceList)

function parseOrder(aString) {
  const values = aString.split(/\s+/)
  return {
    productID: values[0].split('-')[1],
    quantity: parseInt(values[1]),
  }
}
function price(order, priceList) {
  return order.quantity * priceList[order.productID]
}
