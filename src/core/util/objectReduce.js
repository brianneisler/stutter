import objectKeys from './objectKeys'

export default function objectReduce(object, iteratee, accumulator, initAccum) {
  let index = -1
  const keys = objectKeys(object)
  const length = keys.length

  if (initAccum && length) {
    accumulator = object[keys[++index]]
  }
  while (++index < length) {
    const key = keys[index]
    accumulator = iteratee(accumulator, object[key], key, object)
  }
  return accumulator
}
