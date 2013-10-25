"use strict"

var robustDiff = require("../robust-diff")

require("tape")(function(t) {

  t.same(robustDiff([1],[1]), [0])
  t.end()
})