import Seq from './js/Seq'
import Type from './js/Type'
import anyFindType from './anyFindType'

describe('anyFindType', () => {
  test('returns the matched type', () => {
    const NumberType = new Type({
      is: (any) => typeof any === 'number'
    })
    const StringType = new Type({
      is: (any) => typeof any === 'string'
    })
    const types = Seq([NumberType, StringType])
    expect(anyFindType(123, types)).toBe(NumberType)
  })

  test('returns null when no match is found', () => {
    const NumberType = new Type({
      is: (any) => typeof any === 'number'
    })
    const StringType = new Type({
      is: (any) => typeof any === 'string'
    })
    const types = Seq([NumberType, StringType])
    expect(anyFindType({}, types)).toBe(null)
  })
})
