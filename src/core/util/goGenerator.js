import goNext from './goNext'

export default async function goGenerator(generator) {
  let next = { done: false }
  while (!next.done) {
    next = await goNext(generator, next.value)
  }
  return next.value
}
