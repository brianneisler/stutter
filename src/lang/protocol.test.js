import Number from './types/Number'
import Protocol from './classes/Protocol'
import Self from './types/Self'
import protocol from './protocol'

describe('protocol', () => {
  test('returns a new protocol', () => {
    const definitions = {
      foo: [Self, Number]
    }
    const result = protocol(definitions)
    expect(result).toBeInstanceOf(Protocol)
    expect(result.getDefinitions()).toBe(definitions)
  })
})
