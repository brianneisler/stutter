import Exception from './js/Exception'
import anyIsFunction from './anyIsFunction'
import buildExpected from './buildExpected'

const buildException = (source) => {
  if (!anyIsFunction(source)) {
    throw new TypeError('Expected source to be a Function')
  }
  return {
    expected: {
      arg: (arg, index) =>
        buildExpected(
          'Argument',
          (expected) =>
            new Exception(
              source,
              {
                // TODO BRN: Figure out how to get this type information without
                // having to be explicit
                type: 'Argument',
                index,
                value: arg
              },
              expected
            )
        ),
      arguments: (args) =>
        buildExpected(
          'Arguments',
          (expected) =>
            new Exception(
              source,
              {
                type: 'Arguments',
                value: args
              },
              expected
            )
        ),
      returned: (returned) =>
        buildExpected(
          'Returned',
          (expected) =>
            new Exception(
              source,
              {
                type: 'Returned',
                value: returned
              },
              expected
            )
        )
    }
  }
}

export default buildException
