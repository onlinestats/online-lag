function Lag (l) {
  var values = []
  var n = 0

  function lag (y) {
    if ((l > 0) && (typeof y !== 'undefined')) {
      if (Array.isArray(y)) {
        y.forEach(function (v) {
          lag(v)
        })
      } else {
        n += 1
        if (values.length === 0) {
          values.push(y)
        } else {
          var lim = Math.min(values.length, l - 1)
          for (var i = lim; i > 0; i--) {
            values[i] = values[i - 1]
          }
          values[0] = y
        }
      }
    }
    return values
  }

  Object.defineProperty(lag, 'values', {
    get: function () {
      return values
    }
  })

  Object.defineProperty(lag, 'n', {
    get: function () {
      return n
    }
  })

  return lag
}

module.exports = Lag
