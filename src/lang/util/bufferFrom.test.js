import Buffer from '../classes/Buffer'
import bufferFrom from './bufferFrom'

describe('bufferFrom', () => {
  test('creates a Buffer from a string', async () => {
    const result = bufferFrom('abc123')
    expect(result).toBeInstanceOf(Buffer)
    // https://hackernoon.com/https-medium-com-amanhimself-converting-a-buffer-to-json-and-utf8-strings-in-nodejs-2150b1e3de57
    expect(result.toString('utf8')).toBe('abc123')
  })

  test('creates a Buffer from an array', async () => {
    const result = bufferFrom([0, 1, 2, 3, 4])
    expect(result).toBeInstanceOf(Buffer)
    expect(Array.prototype.slice.call(result, 0)).toEqual([0, 1, 2, 3, 4])
  })
})
