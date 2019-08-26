import Protocol from './Protocol'
import defprotocol from '../defprotocol'

describe('Protocol', () => {
  describe('is', () => {
    test('Retruns true for a defined Protocol', () => {
      const TestProtocol = defprotocol('TestProtocol', 'A test Protocol', {})
      expect(Protocol.is(TestProtocol)).toBe(true)
    })
  })
})
