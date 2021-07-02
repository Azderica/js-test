const Province = require('./Province.js')
const sampleProvinceData = require('./Data.js')

var assert = require('assert')

describe('province', function () {
  it('shortfall', function () {
    const asia = new Province(sampleProvinceData())
    assert.equal(asia.shortfall, 5)
  })
})
