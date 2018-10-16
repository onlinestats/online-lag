# online-lag
Stores last N values of a data stream

## Usage
```javascript
const Lag = require('online-lag')
const N = 4
const lag = Lag(N)

;[1, 2, 3, [4, 5], 6, 7].forEach(v => {
  lag(v) // accepts arrays too
})

console.log('Values, n: ', l.values, l.n) // [7,6,5,4] 4
```
