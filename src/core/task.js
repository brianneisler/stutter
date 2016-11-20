import Promise from 'bluebird'

export default function task(context) {

  const promise = new Promise()
  let cancelled = false
  let running = true
  function isRunning() {
    return running
  }
  function isCancelled() {
    return cancelled
  }
  return {
    isRunning,
    promise
  }
}
