import API from '@/api/index.js'
export default ({ app }, inject) => {
  // Set the function directly on the context.app object
  app.$axios = API
}
