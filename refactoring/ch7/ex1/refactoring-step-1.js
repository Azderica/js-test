class Organization {
  constructor(data) {
    this._name = data.name
    this._country = data.country
  }
  get name() {
    return this._name
  }
  set name(arg) {
    this._name = arg
  }
  get country() {
    return this._country
  }
  set country(arg) {
    this._country = arg
  }
}

const organization = new Organization({
  name: '애크미 구스베리',
  country: 'GB',
})
function getRawDataOfOrganization() {
  return organization._data
}
function getOrganization() {
  return organization
}

result += `<h1>${getRawDataOfOrganization().name}</h1>`
getRawDataOfOrganization().name = newName
