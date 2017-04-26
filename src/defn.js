import curry from './curry'

export default function defn(func, arity) {
  return curry(func, arity)
}
