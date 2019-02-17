import Function from './util/js/Function'
import defprotocol from './defprotocol'

describe('defprotocol', () => {
  test('defines a protocol', () => {
    const Protocol = defprotocol({
      foo: Function
    })
    expect(Protocol.is).toBeInstanceOf(Function)
  })

  test('Protocol.is correctly identifies an object protocol', () => {
    const Protocol = defprotocol({
      foo: Function
    })
    expect(
      Protocol.is({
        foo: () => {}
      })
    ).toBe(true)

    expect(
      Protocol.is({
        bar: () => {}
      })
    ).toBe(false)
  })

  test('Protocol.is correctly identifies a function based protocol', () => {
    const Protocol = defprotocol(value)
    expect(
      Protocol.is({
        foo: () => {}
      })
    ).toBe(true)

    expect(
      Protocol.is({
        bar: () => {}
      })
    ).toBe(false)
  })
})
