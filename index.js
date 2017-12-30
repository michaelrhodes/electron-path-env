var paths = require('module').globalPaths
var resolve = require('path').resolve
var cwd = process.cwd()

if (process.env.ELECTRON_PATH)
  process.env.ELECTRON_PATH.split(':')
    .forEach(function (p) {
      paths.push(resolve(cwd, p))
    })
