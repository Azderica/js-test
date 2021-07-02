const Province = require('./Province.js')
const sampleProvinceData = require('./Data.js')

var assert = require('assert')

describe('province', function () {
  it('shortfall', function () {
    const asia = new Province(sampleProvinceData())
    assert.equal(asia.shortfall, 5)
  })

  it('profit', function () {
    const asia = new Province(sampleProvinceData())
    assert.equal(asia.profit, 230)
  })

  it('change production', function () {
    const asia = new Province(sampleProvinceData())
    asia.producers[0].production = 20
    assert.equal(asia.shortfall, -6)
    assert.equal(asia.profit, 292)
  })
})
