import API from '@/api/index.js'
export default (context, inject) => {
  // Set the function directly on the context.app object
  context.app.$axios = API

  console.log(context)
}
