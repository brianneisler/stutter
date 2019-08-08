import * as js from './js'
import Any from '../types/Any'
import Number from '../types/Number'
import String from '../types/String'
import buildFn from './buildFn'

describe('buildFn', () => {
  it('builds a function using the given function and defintion', async () => {
    const foo = buildFn((argA, argB) => argB, [Any, Number, () => String])

    expect(foo.meta).toEqual({
      parameters: [new js.Parameter('argA', Any), new js.Parameter('argB', Number)],
      returns: String
    })
  })
})
