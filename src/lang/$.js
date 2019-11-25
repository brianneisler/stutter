defn(
  'sqrAll',

  [$.list],
  map(sqr, $.list)
)

map(fn([$.x], mul($.x, $.x)), range(1, 10))

defn('add', [$.a, $.b], add($.a, $.b))
