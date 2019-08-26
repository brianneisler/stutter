import Seq from './js/Seq'
import Type from './js/Type'
import anyFilterTypes from './anyFilterTypes'

describe('anyFilterTypes', () => {
  test('returns the matching types', () => {
    const NumberType = new Type({
      is: (any) => typeof any === 'number'
    })
    const StringType = new Type({
      is: (any) => typeof any === 'string'
    })
    const emailRegex = /[^@]+@[^\.]+\..+/g
    const EmailType = new Type({
      is: (any) => emailRegex.test(any)
    })
    const types = Seq([NumberType, StringType, EmailType])
    const result = anyFilterTypes('abc@def.com', types)
    expect(result).toBeInstanceOf(Seq)
    expect(result.toArray()).toEqual([StringType, EmailType])
  })

  test('returns an Empty Seq when no match is found', () => {
    const NumberType = new Type({
      is: (any) => typeof any === 'number'
    })
    const StringType = new Type({
      is: (any) => typeof any === 'string'
    })
    const types = Seq([NumberType, StringType])
    const result = anyFilterTypes({}, types)
    expect(result).toBeInstanceOf(Seq)
    expect(result.toArray()).toEqual([])
  })
})
