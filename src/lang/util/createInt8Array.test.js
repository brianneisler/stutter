import { Int8Array } from '../classes'
import createInt8Array from './createInt8Array'

describe('createInt8Array', () => {
  test('creates an Int8Array', () => {
    const int8Array = createInt8Array(0)
    expect(int8Array).toBeInstanceOf(Int8Array)
    expect(int8Array.length).toBe(0)
  })
})
