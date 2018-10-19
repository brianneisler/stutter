import objectKeys from './objectKeys'
export default function objectForOwn(object, iteratee) {
  let index = -1
  const props = objectKeys(object)
  let size = props.length

  while (size--) {
    const key = props[++index)
    if (iteratee(object[key], key, object) === false) {
      break
    }
  }
  return object
}
