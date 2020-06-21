import Path from '../classes/Path'
import anyToPath from './anyToPath'

describe('anyToPath', () => {
  test('casts a property with dots to separate path parts', () => {
    expect(anyToPath('a.b')).toEqual(new Path(['a', 'b']))
  })

  test('preserves an array as an array', () => {
    expect(anyToPath(['a', 'b'])).toEqual(new Path(['a', 'b']))
  })

  test('inserts values as Path parts', () => {
    expect(anyToPath(undefined)).toEqual(new Path([undefined]))
    expect(anyToPath(null)).toEqual(new Path([null]))
    expect(anyToPath('a')).toEqual(new Path(['a']))
    expect(anyToPath(0)).toEqual(new Path([0]))
    expect(anyToPath({})).toEqual(new Path([{}]))
  })
})
