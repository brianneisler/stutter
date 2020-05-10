import parse from './parse'

describe('parse', () => {
  test('parses a simple AssignmentExpression', async () => {
    const result = await parse('var a = "foo";', {
      plugins: [
        // enable jsx and flow syntax
        'jsx',
        'flow'
      ],

      // parse in strict mode and allow module declarations
      sourceType: 'module'
    })
    console.log(result.program.body[0])
  })
})
