import Exception from './js/Exception'
import buildExpected from './buildExpected'

const buildException = (source, { code, stack } = {}) => {
  return {
    expected: {
      arg: (arg, index) =>
        buildExpected(
          'Argument',
          (expected) =>
            new Exception({
              code,
              expected,
              source,
              stack,
              target: {
                // TODO BRN: Figure out how to get this type information without
                // having to be explicit
                index,
                type: 'Argument',
                value: arg
              }
            })
        ),
      arguments: (args) =>
        buildExpected(
          'Arguments',
          (expected) =>
            new Exception({
              code,
              expected,
              source,
              stack,
              target: {
                type: 'Arguments',
                value: args
              }
            })
        ),
      fn: (fn) =>
        buildExpected(
          'Fn',
          (expected) =>
            new Exception({
              code,
              expected,
              source,
              stack,
              target: {
                type: 'Fn',
                value: fn || source
              }
            })
        ),
      returned: (returned) =>
        buildExpected(
          'Returned',
          (expected) =>
            new Exception({
              code,
              expected,
              source,
              stack,
              target: {
                type: 'Returned',
                value: returned
              }
            })
        ),
      this: (_this) =>
        buildExpected(
          'This',
          (expected) =>
            new Exception({
              code,
              expected,
              source,
              stack,
              target: {
                type: 'This',
                value: _this
              }
            })
        )
    }
  }
}

export default buildException
