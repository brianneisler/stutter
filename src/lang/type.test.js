import Type from './util/js/Type'
import type from './type'

describe('type', () => {
  test('returns a new Type', () => {
    const testDef = {
      class: class {},
      protocols: []
    }
    const result = type(testDef)
    expect(result).toBeInstanceOf(Type)
    expect(result).toEqual({
      class: testDef.class,
      protocols: new Map()
    })
  })
})
