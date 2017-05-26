import toNumber from '../toNumber'

export default function wrapArgsToNumbers() {
  return (fn) => (...args) => {
    args = args.map(toNumber)
    return fn(...args)
  }
}
