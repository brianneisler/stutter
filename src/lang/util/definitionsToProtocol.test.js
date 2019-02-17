import Any from '../types/Any'
import Protocol from './js/Protocol'
import definitionsToProtocol from './definitionsToProtocol'

describe('definitionsToProtocol', () => {
  it('returns a `Protocol` instance with props set correctly', () => {
    const instance = definitionsToProtocol({
      foo: [Any]
    })
    expect(instance).toBeInstanceOf(Protocol)
    expect(instance).toEqual({
      definitions: {
        foo: [Any]
      }
    })
  })
})
