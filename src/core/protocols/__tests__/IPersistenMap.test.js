import 'babel-polyfill'
import { expect } from 'chai'
import { IPersistentMap } from '../'
import Immutable from 'immutable'

describe('IPersistentMap', function() {

  it('is correctly detects values that implement IPersistentMap protocol', function() {
    const data = {
      clear: () => {},
      delete: () => {},
      entries: () => {},
      get: () => {},
      has: () => {},
      keys: () => {},
      set: () => {},
      values: () => {}
    }
    const dataMissing = {
      clear: () => {},
      delete: () => {},
      entries: () => {},
      get: () => {},
      has: () => {},
      keys: () => {},
      set: () => {},
    }

    const imMap = Immutable.Map({})
    const imList = Immutable.List([])
    const imSet = Immutable.Set([])
    const map = new Map({})
    const set = new Set([])
    const array = []
    const object = {}

    expect(IPersistentMap.is(data)).to.be.true
    expect(IPersistentMap.is(imMap)).to.be.true
    expect(IPersistentMap.is(map)).to.be.true

    expect(IPersistentMap.is(dataMissing)).to.be.false
    expect(IPersistentMap.is(imList)).to.be.false
    expect(IPersistentMap.is(imSet)).to.be.false
    expect(IPersistentMap.is(set)).to.be.false
    expect(IPersistentMap.is(array)).to.be.false
    expect(IPersistentMap.is(object)).to.be.false
  })
})
