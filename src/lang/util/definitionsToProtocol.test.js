import Any from '../types/Any'
import ImmutableList from '../classes/ImmutableList'
import ImmutableMap from '../classes/ImmutableMap'
import Protocol from '../classes/Protocol'
import Self from '../types/Self'
import definitionsToProtocol from './definitionsToProtocol'

describe('definitionsToProtocol', () => {
  it('returns a `Protocol` instance with props set correctly', () => {
    const instance = definitionsToProtocol({
      foo: [Self, Any]
    })
    expect(instance).toBeInstanceOf(Protocol)
    expect(instance).toMatchObject({
      definitions: ImmutableMap({
        foo: ImmutableList([Self, Any])
      })
    })
  })
})
