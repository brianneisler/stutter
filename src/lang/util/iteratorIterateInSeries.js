import anyIsResolved from './anyIsResolved'
import unresolvedResolveWith from './unresolvedResolveWith'

const iterationResolve = (iteration, iterator, iteratee, recur) =>
  unresolvedResolveWith(iteration, (resolvedIteration) => {
    if (resolvedIteration.done) {
      return resolvedIteration.value
    }
    return recur(iterator, iteratee)
  })

const iteratorIterateInSeries = (iterator, iteratee) => {
  while (true) {
    let iteration = iterator.next()
    if (!anyIsResolved(iteration)) {
      return unresolvedResolveWith(iteration, (resolvedNext) => {
        iteration = iteratee(resolvedNext)
        if (!anyIsResolved(iteration)) {
          return iterationResolve(
            iteration,
            iterator,
            iteratee,
            iteratorIterateInSeries
          )
        }
        if (iteration.done) {
          return iteration.value
        }
        return iteratorIterateInSeries(iterator, iteratee)
      })
    }
    iteration = iteratee(iteration)
    if (!anyIsResolved(iteration)) {
      return iterationResolve(
        iteration,
        iterator,
        iteratee,
        iteratorIterateInSeries
      )
    }
    if (iteration.done) {
      return iteration.value
    }
  }
}

export default iteratorIterateInSeries
