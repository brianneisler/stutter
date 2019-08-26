import Number from '../types/Number'
import String from '../types/String'
import functionToParameterNames from './functionToParameterNames'
import functionTypify from './functionTypify'

describe('functionToParameterNames', () => {
  it('returns an empty Array for a function that has no parameters', () => {
    expect(functionToParameterNames(function test() {})).toEqual([])
  })

  it('returns an array of Parameters based on the param names for a function that is not parameterized', () => {
    expect(
      functionToParameterNames(function test(foo, bar) {
        return bar
      })
    ).toEqual(['foo', 'bar'])
  })

  it('returns an array of Parameters based on the param names for a function that is parameterized', () => {
    const func = functionTypify(
      function test(foo, bar) {
        return bar
      },
      [String, Number]
    )
    expect(functionToParameterNames(func)).toEqual(['foo', 'bar'])
  })
})
