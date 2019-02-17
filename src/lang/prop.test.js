import getProp from './getProp'
import prop from './prop'

describe('prop', () => {
  test('prop is alias of getProp', () => {
    expect(prop).toBe(getProp)
  })
})
