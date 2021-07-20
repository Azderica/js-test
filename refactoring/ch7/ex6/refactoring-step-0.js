class TrackingInformation {
  // 배송 회사
  get shippingCompany() {
    return this._shippingCompany
  }
  set shippingCompany(arg) {
    this._shippingCompany = arg
  }
  // 추적 번호
  get trackingNumber() {
    return this._trackingNumber
  }
  set trackingNumber(arg) {
    this._trackingNumber = arg
  }
  get display() {
    return `${this.shippingCompany}: ${this.trackingNumber}`
  }
}

class Shipment {
  get trackingInfo() {
    return this._trackingInformation.display
  }
  get trackingInformation() {
    return this._trackingInformation
  }
  set trackingInformation(aTrackingInformation) {
    this._trackingInformation = aTrackingInformation
  }
}

// client
aShipment.trackingInformation.shippingCompany = request.vendor
