/* eslint-disable prefer-const */
/* eslint-disable no-prototype-builtins */
/**
 * 生成签名
 */
import Md5 from 'js-md5'

export function sign(data) {
  const param = data || {}
  const arr = []
  let str = '{'
  for (const key in param) {
    if (param.hasOwnProperty(key)) {
      const o = {
        key: key,
        value: param[key]
      }
      arr.push(o)
    }
  }
  arr.sort(function(x, y) {
    if (x.key.toLowerCase() > y.key.toLowerCase()) {
      return 1
    } else if (x.key.toLowerCase() < y.key.toLowerCase()) {
      return -1
    } else {
      return 0
    }
  })
  // 將字符串排序，去除单引号及双引号
  arr.forEach(function(item) {
    const obj = item.value
    str += item.key + ':' + JSON.stringify(obj)
  })
  str += '}'
  str = str.replace(/\\t/g, '')
  str = str.replace(/\\n/g, '')
  str = str.replace(/['|,|\s|"|\n|\\[|\]]/g, '')
  // 随机生成一个数字randNo

  let count = str.length
  // 随机数加1，当为0是会出现参数异常
  let randNo = Math.round(Math.random() * count) + 1

  let signStr = str.substring(Math.floor(count / randNo))
  // MD5加密signStr再拼接randNo
  let sign = Md5(signStr) + randNo.toString()
  param.sign = sign
  return param
}
