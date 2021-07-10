function priceOrder(product, quantity, shippingMethod) {
  const basePrice = product.basePrice * quantity
  const discount =
    Math.max(quantity - product.discountThreshold, 0) *
    product.basePrice *
    product.discountRate
  const priceData = {
    basePrice: basePrice,
    quantity: quantity,
    discount: discount,
  } // 중간 데이터 구조
  const price = applyShipping(priceData, shippingMethod)
  return price
}

function applyShipping(priceData, shippingMethod) {
  const shippingPerCase =
    basePrice > shippingMethod.discountThreshold
      ? shippingMethod.discountedFee
      : shippingMethod.feePerCase
  const shippingCost = priceData.quantity * shippingPerCase
  const price = priceData.basePrice - priceData.discount + shippingCost
  return price
}
