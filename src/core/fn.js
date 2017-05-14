import curry from './curry'

export default function fn(func, arity) {
  return curry(func, arity)
}
