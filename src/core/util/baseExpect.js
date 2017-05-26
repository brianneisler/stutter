const { NODE_ENV } = process.env

export default function baseExpect(condition, format, ...args) {
  if (NODE_ENV !== 'production') {
    if (format === undefined) {
      throw new Error('expect requires an error message argument')
    }
  }

  if (!condition) {
    let argIndex = 0
    const error = new Error(
      format.replace(/%s/g, () => args[argIndex++])
    )
    error.name = 'Expectation Violation'
    error.framesToPop = 1
    throw error
  }
}
