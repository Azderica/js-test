function priceOrder(product, quantity, shippingMethod) {
  const priceData = calculatePricingData(product, quantity)
  return applyShipping(priceData, shippingMethod)
}

function calculatePricingData(product, quantity) {
  const basePrice = product.basePrice * quantity
  const discount =
    Math.max(quantity - product.discountThreshold, 0) *
    product.basePrice *
    product.discountRate
  return {
    basePrice: basePrice,
    quantity: quantity,
    discount: discount,
  } // 중간 데이터 구조
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
