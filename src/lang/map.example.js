import map from './map'

example('map', () => {
  const double = (x) => x * 2

  map(double, [1, 2, 3])
  // => [2, 4, 6]

  map(double, { x: 1, y: 2, z: 3 })
  // => {x: 2, y: 4, z: 6}
})
