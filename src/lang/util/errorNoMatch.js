const errorNoMatch = () => {
  // TODO BRN: Enhance this error so that we know what we were working with.
  // Need a way of producing an Expected:toMatchParameter Exception when we
  // cannot find any matching functions
  const err = new Error(`Could not find matching function for given args.`)
  err.code = 'NO_MATCH'
  return err
}

export default errorNoMatch
