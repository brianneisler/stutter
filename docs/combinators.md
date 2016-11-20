Examples
```
import { fetchCustomers, fetchProducts } from './path/to/api'

function* myFunc() {
  const results = yield [
    call(fetchCustomers),
    fetchProducts,
    new Promise((resolve) => resolve('abc')),
    123
  ]

  // results = [customers, products, 'abc', 123]
}
```
