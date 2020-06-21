import Map from '../classes/Map'
import anyIsArray from './anyIsArray'
import anyIsFunction from './anyIsFunction'
import anyIsImmutableList from './anyIsImmutableList'
import anyIsImmutableMap from './anyIsImmutableMap'
import anyIsObject from './anyIsObject'
import loggerLogArray from './loggerLogArray'
import loggerLogFunction from './loggerLogFunction'
import loggerLogImmutableList from './loggerLogImmutableList'
import loggerLogImmutableMap from './loggerLogImmutableMap'
import loggerLogObject from './loggerLogObject'
import stringRepeat from './stringRepeat'

const createLogger = () => {
  let indentSize = 0
  let data = ''
  let logger = null
  let previosEOL = true
  // let timeoutId

  // const logAfterTimeout = () => {
  //   if (!timeoutId) {
  //     timeoutId = (() => {
  //       console.log('made it here')
  //       // eslint-disable-next-line no-console
  //       console.log(data)
  //       timeoutId = null
  //       data = ''
  //     }, 0)
  //   }
  // }
  const deindent = () => {
    indentSize -= 2
  }

  const indent = () => {
    indentSize += 2
  }

  const write = (value, eol = true) => {
    data +=
      (previosEOL ? stringRepeat(' ', indentSize) : '') +
      value +
      (eol ? '\n' : '')
    previosEOL = eol
  }

  const visited = new Map()
  const log = (any) => {
    if (!anyIsObject(any)) {
      return write(any)
    }

    if (visited.has(any)) {
      return write('*cyclical*')
    }
    visited.set(any, true)
    if (anyIsFunction(any.log)) {
      any.log(logger)
    } else if (anyIsFunction(any)) {
      loggerLogFunction(logger, any)
    } else if (anyIsImmutableList(any)) {
      loggerLogImmutableList(logger, any)
    } else if (anyIsImmutableMap(any)) {
      loggerLogImmutableMap(logger, any)
    } else if (anyIsArray(any)) {
      loggerLogArray(logger, any)
    } else if (anyIsObject(any)) {
      loggerLogObject(logger, any)
    }
    visited.delete(any)
  }

  const push = () => {
    // eslint-disable-next-line no-console
    console.log(data)
    data = ''
  }

  const toString = () => data

  logger = {
    deindent,
    indent,
    log,
    push,
    toString,
    write
  }
  return logger
}

const anyLog = (any, logger = createLogger()) => {
  logger.log(any)
  return logger
}

export default anyLog
