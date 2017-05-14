import 'babel-polyfill'
import { expect } from 'chai'
import { compose } from '../'
import Immutable from 'immutable'

describe('compose', function() {

  it('composes two functions', function() {
    const called = []
    const func = compose(
      (val) => {
        called.push('1')
        return val + 1
      },
      (val) => {
        called.push('2')
        return val + 2
      }
    )
    const result = func(3)
    expect(result).to.equal(6)
    expect(called).to.deep.equal(['2', '1'])
  })

  it('composes array of two functions', function() {
    const called = []
    const func = compose([
      (val) => {
        called.push('1')
        return val + 1
      },
      (val) => {
        called.push('2')
        return val + 2
      }
    ])
    const result = func(3)
    expect(result).to.equal(6)
    expect(called).to.deep.equal(['2', '1'])
  })

  it('composes Immutable.List of two functions', function() {
    const called = []
    const func = compose(Immutable.List([
      (val) => {
        called.push('1')
        return val + 1
      },
      (val) => {
        called.push('2')
        return val + 2
      }
    ]))
    const result = func(3)
    expect(result).to.equal(6)
    expect(called).to.deep.equal(['2', '1'])
  })
})
