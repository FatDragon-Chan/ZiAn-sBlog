/* eslint-disable import/no-mutable-exports */
/**
 * 配置编译环境和线上环境之间的切换
 *
 * baseUrl: 域名地址
 * routerMode: 路由模式
 * imgBaseUrl: 图片所在域名地址
 *
 */

let baseUrl
let routerMode
const imgBaseUrl = 'https://fuss10.elemecdn.com'

if (process.env.NODE_ENV === 'development') {
  baseUrl = 'http://127.0.0.1:7001'
  routerMode = 'history'
} else {
  baseUrl = 'https://api.github.com/'
  routerMode = 'history'
}
console.log(process.env.NODE_ENV, baseUrl)

export { baseUrl, routerMode, imgBaseUrl }
