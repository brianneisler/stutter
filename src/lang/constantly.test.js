import always from './always'
import constantly from './constantly'

describe('constantly', () => {
  test('is an alias of always', () => {
    expect(constantly).toBe(always)
  })
})
