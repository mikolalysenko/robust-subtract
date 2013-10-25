"use strict"

var sum = require("robust-sum")

module.exports = robustDiff

function robustDiff(a,b) {
  var c = b.slice()
  for(var i=0; i<c.length; ++i) {
    c[i] = -c[i]
  }
  return sum(a,c)
}