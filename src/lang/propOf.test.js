import getPropOf from './getPropOf'
import propOf from './propOf'

describe('propOf', () => {
  test('propOf is alias of getPropOf', () => {
    expect(propOf).toBe(getPropOf)
  })
})
