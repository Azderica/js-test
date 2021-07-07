// before
class Book {
  addReservation(customer) {
    this._reservations.push(customer)
  }
}

// after
class Book {
  zz_addReservation(customer, isPriority) {
    assert(isPriority == true || isPriority == false)
    this._reservations.push(customer)
  }
}
