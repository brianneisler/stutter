import Any from '../types/Any'
import ImmutableList from './js/ImmutableList'
import ImmutableMap from './js/ImmutableMap'
import Protocol from './js/Protocol'
import Self from '../types/Self'
import definitionsToProtocol from './definitionsToProtocol'

describe('definitionsToProtocol', () => {
  it('returns a `Protocol` instance with props set correctly', () => {
    const instance = definitionsToProtocol({
      foo: [Self, Any]
    })
    expect(instance).toBeInstanceOf(Protocol)
    expect(instance).toEqual({
      definitions: ImmutableMap({
        foo: ImmutableList([Self, Any])
      })
    })
  })
})
