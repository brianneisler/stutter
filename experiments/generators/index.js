const gen1 = function*() {
  yield 'foo'
  throw new Error('bar')
}

const gen2 = function*(gen) {
  try {
    return yield* gen
  } catch (error) {
    console.log('gen2 error:', error)
    throw error
  }
}

const gen3 = function*(gen) {
  try {
    return yield* gen2(gen)
  } catch (error) {
    console.log('gen3 error:', error)
  }
}

const generator = gen3(gen1())
console.log(generator.next())
console.log(generator.next())
