const path = require('path')

exports.assetsPath = function (_path) {
  const assetsSubDirectory = process.env.NODE_ENV === 'production'
    ? "static"
    : "static"

  return path.posix.join(assetsSubDirectory, _path)
}