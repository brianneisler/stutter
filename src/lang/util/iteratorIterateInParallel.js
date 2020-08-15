import anyIsResolved from './anyIsResolved'
import createImmutableList from './createImmutableList'
import immutableListPush from './immutableListPush'
import unresolvedResolveWith from './unresolvedResolveWith'

const iterationResolve = (iteration, iterator, iteratee, recur) =>
  unresolvedResolveWith(iteration, (resolvedIteration) => {
    if (resolvedIteration.done) {
      return resolvedIteration.value
    }
    return recur(iterator, iteratee)
  })

const iterateeCallWithIteration = (iteratee, iteration) => {
  iteration = iteratee(iteration)
  if (!anyIsResolved(iteration)) {
    return iterationResolve(
      iteration,
      iterator,
      iteratee,
      iteratorIterateInParallel
    )
  }
}

const iteratorIterateInParallel = (iterator, iteratee) => {
  let iterationResults = createImmutableList()
  while (true) {
    const iteration = iterator.next()
    // NOTE BRN: We HAVE to wait for the iteration to resolve before we can
    // continue since we don't know whether we're done or not until this
    // resolves
    // IDEA BRN: We could make a number of batch calls to `next` in situations
    // where it would be acceptable to trade overhead for speed
    if (!anyIsResolved(iteration)) {
      return unresolvedResolveWith(iteration, (resolvedIteration) => {
        iterationResults = immutableListPush(
          iterationResults,
          iterateeCallWithIteration(iteratee, resolvedIteration)
        )

        if (!anyIsResolved(iteration)) {
          return iterationResolve(
            iteration,
            iterator,
            iteratee,
            iteratorIterateInParallel
          )
        }
        if (iteration.done) {
          return iteration.value
        }
        return iteratorIterateInParallel(iterator, iteratee)
      })
    }
    iterationResults = immutableListPush(
      iterationResults,
      iterateeCallWithIteration(iteratee, iteration)
    )
    if (iteration.done) {
      return iteration.value
    }
  }
}

export default iteratorIterateInParallel
