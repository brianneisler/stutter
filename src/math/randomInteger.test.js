import randomInteger from './randomInteger'

describe('randomInteger', () => {
  test('generates a random Integer', () => {
    const random = randomInteger()
    expect(random % 1).toBe(0)
  })
})
