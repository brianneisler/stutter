import SYMBOL_PROTOCOLS from '../constants/SYMBOL_PROTOCOLS'
import objectGetProtocols from './objectGetProtocols'

describe('objectGetProtocols', () => {
  it('returns empty object when no protocols are found', () => {
    const object = { foo: 'bar' }
    const protocols = objectGetProtocols(object)
    expect(protocols).toEqual({})
  })

  it('returns protocols of simple object', () => {
    const object = {
      [SYMBOL_PROTOCOLS]: {
        foo: 'foo'
      }
    }
    const protocols = objectGetProtocols(object)
    expect(protocols).toEqual({
      foo: 'foo'
    })
  })

  it('returns protocols of object from prototype', () => {
    const Foo = function() {}
    Foo.prototype[SYMBOL_PROTOCOLS] = {
      foo: 'foo'
    }
    const object = new Foo()
    const protocols = objectGetProtocols(object)
    expect(protocols).toEqual({
      foo: 'foo'
    })
  })

  it('returns protocols of object from nested prototypes', () => {
    const Foo = class {}
    Foo.prototype[SYMBOL_PROTOCOLS] = {
      foo: 'foo'
    }

    const Bar = class extends Foo {}
    Bar.prototype[SYMBOL_PROTOCOLS] = {
      bar: 'bar'
    }
    const object = new Bar()
    const protocols = objectGetProtocols(object)
    expect(protocols).toEqual({
      foo: 'foo',
      bar: 'bar'
    })
  })
})
