import Api from '@/api/index.js'

export default (context, inject) => {
  // 同时注入context 服务端  vue 客户端 vuex 仓库端
  inject('axios', Api)
}
