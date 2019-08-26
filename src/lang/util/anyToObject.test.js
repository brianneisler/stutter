import anyToObject from './anyToObject'

describe('anyToObject', () => {
  test('hands off to the anyToObject method if present', () => {
    const object = {
      toObject: () => ({
        foo: 'bar'
      })
    }
    expect(anyToObject(object)).toEqual({ foo: 'bar' })
  })

  test('flattens prototype properties', () => {
    function Foo() {
      this.b = 2
    }
    Foo.prototype.c = 3
    expect(anyToObject(new Foo())).toEqual({ b: 2, c: 3 })
  })
})
