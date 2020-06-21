import { Error } from '../classes'
import createError from './createError'

describe('createError', () => {
  test('creates an Error', () => {
    const result = createError()
    expect(result).toBeInstanceOf(Error)
  })
})
