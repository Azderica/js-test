// before
function inNewEngland(aCustomer) {
  return ['MA', 'CT', 'ME', 'VT', 'NH', 'RI'].includes(aCustomer.address.state)
}
const newEnglanders = someCustomer.filter((c) => inNewEngland(c))

// after
function inNewEngland(stateCode) {
  return ['MA', 'CT', 'ME', 'VT', 'NH', 'RI'].includes(stateCode)
}
const newEnglanders = someCustomer.filter((c) => inNewEngland(c.address.state))
