import { Buffer } from '../classes'
import { buffers, values } from '../../test'
import arrayDifference from './arrayDifference'
import bufferEquals from './bufferEquals'

describe('bufferEquals', () => {
  test('Empty Buffer equals empty Buffer', () => {
    expect(bufferEquals(Buffer.from([]), Buffer.from([]))).toBe(true)
  })

  test('Returns false for buffers with different contentsr', () => {
    expect(bufferEquals(Buffer.from('abc'), Buffer.from('def'))).toBe(false)
  })

  test('does not equal all other values', () => {
    expect((value) =>
      bufferEquals(Buffer.from([]), value)
    ).toHaveReturnedFalsyForValues(arrayDifference(values(), buffers()))
  })
})
