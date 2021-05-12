import _ from 'lodash'

const file = require.context(
  // 其组件目录的相对路径
  './img',
  // 是否查询其子目录
  false,
  // 匹配基础组件文件名的正则表达式
  /\.(jpg|svg|png|gif)$/
)

let assets = {}

file.keys().map((fileName) => {
  const key = _.upperFirst(
    _.camelCase(
      // 获取和目录深度无关的文件名
      fileName
        .split('/')
        .pop()
        .replace(/\.\w+$/, '')
    )
  )

  assets[key] = file(fileName)
  return null
})


console.log(assets)

let container = {
  assets
}

export default container
