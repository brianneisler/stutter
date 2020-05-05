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
        )
    }
  }
}

export default buildException
