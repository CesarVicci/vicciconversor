const expect = require('chai').expect
const converToKg = require('..').conversorToKg
const converToLb = require('..').conversorToLb
describe('#vicciconversor', function () {

  it('- Si ingresas kilogramos calcula el numero de libras por kilogramos.', function () {
    const kilos = converToLb(10)
    expect(kilos).to.equal(22.0462)
  })

  it('- Si ingresas libras calcula el numero de kilogramos por libras.', function () {
    const kilos = converToKg(10)
    expect(kilos).to.equal(4.53592)
  })

})