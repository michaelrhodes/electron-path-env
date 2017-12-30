var paths = require('module').globalPaths
var resolve = require('path').resolve
var cwd = process.cwd()

if (process.env.ELECTRON_PATH)
  process.env.ELECTRON_PATH.split(':')
    .forEach(push)

function push (path) {
  paths.push(resolve(cwd, path))
}
