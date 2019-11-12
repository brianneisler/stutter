import Number from '../types/Number'
import String from '../types/String'
import definitionToFn from './definitionToFn'
import functionToParameterNames from './functionToParameterNames'

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
    const func = definitionToFn(
      function test(foo, bar) {
        return bar
      },
      [String, Number]
    )
    expect(functionToParameterNames(func)).toEqual(['foo', 'bar'])
  })
})
