import append from './append'
import element from './element'

describe('append', () => {
  describe('Array', () => {
    test('appends value to the end of an array', () => {
      expect(append(['write', 'more'], 'tests')).toEqual([
        'write',
        'more',
        'tests'
      ])
    })

    test('appends value to the end of an empty array', () => {
      expect(append([], 'tests')).toEqual(['tests'])
    })

    test('appends an array as an array', () => {
      expect(append(['write', 'more'], ['tests'])).toEqual([
        'write',
        'more',
        ['tests']
      ])
    })

    test('appends an Element when used as the first parameter', () => {
      expect(append(element('tests'), ['write', 'more'])).toEqual([
        'write',
        'more',
        'tests'
      ])
    })

    test('appends an Element when used as the second parameter', () => {
      expect(append(['write', 'more'], element('tests'))).toEqual([
        'write',
        'more',
        'tests'
      ])
    })
  })

  describe('String', () => {
    test('appends a string to a string', () => {
      expect(append('write', 'tests')).toEqual('writetests')
    })
  })

  test('curries the method', () => {
    const appendTests = append(element('tests'))
    expect(appendTests).toBeInstanceOf(Function)

    expect(appendTests(['write'])).toEqual(['write', 'tests'])
  })

  test('automatically upgrades to async if the arrayLike parameter is a Promise', async () => {
    const result = append(element('tests'), Promise.resolve(['write']))
    expect(result).toBeInstanceOf(Promise)
    expect(await result).toEqual(['write', 'tests'])
  })

  test('automatically upgrade to async if the value parameter is a Promise', async () => {
    const result = append(Promise.resolve(element('tests')), ['write'])
    expect(result).toBeInstanceOf(Promise)
    expect(await result).toEqual(['write', 'tests'])
  })
})
