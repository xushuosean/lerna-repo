
import jing from './img/jing.jpg'
import _ from 'lodash'

const requireComponent = require.context(
  // 其组件目录的相对路径
  './img',
  // 是否查询其子目录
  false,
  // 匹配基础组件文件名的正则表达式
  /\.(jpg|svg|png|gif)$/
)


const a = require('./img/jinggao.jpg')

let exportFile = requireComponent.keys().map((file) => {
  return requireComponent.resolve(file)
})

let exportObj = exportFile.map(item => {
  console.log(item.match(/\//))
})

export default exportFile
