import _ from 'lodash'


const isArray = (val) => _.isArray(val)
const isWrap = (val) => _.isObject(val) && _.has(val, 'w')
const isString = (val) => _.isString(val)
const isStatement = (val) => _.isObject(val) && (_.has(val, 'o') || _.has(val, 'p'))
const isValue = (val) => _.has(val, 'v')
const isIdentifier = (val) => _.has(val, 'i')

const renderIndent = (indent) => ('').padEnd(indent, ' ')

const renderId = (id, context) => {
  const name = context.idToNames[id]
  if (!name) {
    throw new Error('Could not find name for id ' + id)
  }
  return name
}

const renderVal = (val, context) => {
  const value = context.values[val]
  if (!value) {
    throw new Error('Could not identify val' + val)
  }
  return value
}

const renderOp = (op) => {
  return op
}

const renderPreop = (preop) => {
  return preop
}

const renderWrap = (wrap, context, indent) => {
  const { w: wrapper, a: array } = wrap
  const [ open, close ] = wrapper
  if (array.length > 0) {
    let output = _.reduce(array, (out, val) => {
      return out + renderIndent(indent + 2) + renderValue(val, context, indent + 2) + '\n'
    }, open + '\n')
    output += renderIndent(indent) + close// + '\n'
    return output
  }
  return open + close + '\n'
}

const renderValue = (value, context, indent) => {
  if (isString(value)) {
    return renderVal(value, context)
  }
  if (isStatement(value)) {
    return renderStatement(value, context, indent)
  }
  if (isIdentifier(value)) {
    return renderIdentifier(value, context)
  }
  if (isWrap(value)) {
    return renderWrap(value, context, indent)
  }
  throw new Error('unidentified value ', value)
}

const renderIdentifier = (identifier, context) => {
  const { i: id } = identifier
  return renderId(id, context)
}

const renderStatement = (statement, context, indent) => {
  const { i: id, o: op, p: preop, v: value } = statement

  let output = ''
  if (preop) {
    output += renderPreop(preop)
  }
  output += renderId(id, context)
  if (op) {
    output += renderOp(op)
  }
  if (value) {
    output += renderValue(value, context, indent)
  }
  return output
}

const renderLogic = (logic, context) => {
  const indent = 0
  return _.reduce(logic, (output, val) => {
    return output + renderValue(val, context, indent) + '\n\n'
  }, '')
}

const render = (logic, context) => {
  return renderLogic(logic, context)
}


const expected =
`ns:types:[
  import:{
    core:[ String Number ]
  }
]

deftype:[
  Film:{
    name:String
    year:Number
    test:'test'
  }
]`

const logic = [
  {
    i:'i0', o:':', v:{
      i:'i1', o:':', v:{
        w:'[]',
        a:[
          {
            i:'i2', o:':', v:{
              w: '{}',
              a:[
                {
                  i:'i3', o:':', v: {
                    w: '[]',
                    a: [
                      { i:'i4' },
                      { i:'i5' }
                    ]
                  }
                }
              ]
            }
          }
        ]
      }
    }
  },
  {
    i:'i6', o:':', v:{
      w:'[]',
      a:[
        {
          i:'i7', o:':', v:{
            w:'{}',
            a:[
              {
                i:'i8', o:':', v: { i:'i4' }
              },
              {
                i:'i9', o:':', v: { i:'i5' }
              },
              {
                i: 'i10', o:':', v: 'v0'
              }
            ]
          }
        }
      ]
    }
  }
]

const context = {
  idToNames: {
    i0: 'ns',
    i1: 'types',
    i2: 'import',
    i3: 'core',
    i4: 'String',
    i5: 'Number',
    i6: 'deftype',
    i7: 'Film',
    i8: 'name',
    i9: 'year',
    i10: 'test'
  },
  values: {
    v0: 'test'
  }
}

console.log(render(logic, context))
