import contagion from './contagion'
import defn from './defn.js'
import pipe from './pipe'
import reduce from './reduce'
import set from './set'

const map = defn(
  'lang.map',
  {
    description: `Takes a function and a [functor](https://github.com/fantasyland/fantasy-land#functor), applies the function to each of the functor's values, and returns a functor of the same shape.

    Provides suitable \`map\` implementations for \`Array\` and \`Object\`
    so this function may be applied to \`[1, 2, 3]\` or \`{x: 1, y: 2, z: 3}\`.

    This method automatically upgrades to async.
    - If the \`iteratee\` or the \`collection\` arguments are Promises, this method will resolve those values before executing and this method will return a \`Promise\`.
    - If the \`iteratee\` returns a \`Promise\`, this method will reutrn a \`Promise\`

    This method executes in **series**. If the iteratee returns a Promise, it will wait till the Promise resolves before it executes the next iteration.`,
    since: 'v0.2.0'
  },

  [Function, Array],
  (iteratee, collection) =>
    reduce(
      (accum, value, pik) => {
        return pipe(
          () => iteratee(value, pik, collection),
          (result) => set(pik, result, accum)
        )()
      },
      contagion(collection),
      collection
    ),

  [Array, Function],
  (collection, iteratee) => map(iteratee, collection)
)

export default map
