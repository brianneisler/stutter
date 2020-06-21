import { ArrayBuffer } from '../classes'
import arrayBufferEquals from './arrayBufferEquals'

describe('arrayBufferEquals', () => {
  test('returns true for two empty ArrayBuffers of equal length', () => {
    const buffer1 = new ArrayBuffer(8)
    const buffer2 = new ArrayBuffer(8)
    expect(arrayBufferEquals(buffer1, buffer2)).toBe(true)
  })
})
