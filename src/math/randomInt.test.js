import randomInt from './randomInt'

describe('randomInt', () => {
  test('generates a random integer', () => {
    const random = randomInt()
    expect(random % 1).toBe(0)
  })
})
