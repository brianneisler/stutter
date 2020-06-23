import iterator from './iterator'

example('lang.iterator', () => {
  iterator(['a', 'b', 'c'])
  // => { next: () => { value: string, index: number, pik: umber, done: boolean }}

  iterator('abc')
  // => { next: () => { value: string, index: number, pik: umber, done: boolean }}

  iterator({ a: 1, b: 2, c: 3 })
  // => { next: () => { value: number, key: string, pik: string, done: boolean }}
})
