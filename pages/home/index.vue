<template>
  <div id="home">
    <template v-for="(item, index) in articleList">
      <article-card :key="index" :article="item" @articleClick="goToArticle" />
    </template>
    <div v-if="!isLastPage" class="page-more">
      查看更多
    </div>
    <div class="page-controls">
      <a :href="`/${queryForm.page - 1}`">上一页</a>
      <a v-if="!isLastPage" :href="`/${queryForm.page + 1}`">下一页</a>
      <div v-else>
        已经是最后一页
      </div>
    </div>
  </div>
</template>

<script>
import articleCard from '~/components/ArticleCard.vue'
export default {
  name: 'Home',
  layout: 'blog',
  components: {
    articleCard
  },
  data() {
    return {
      queryForm: {},
      articleList: [],
      total: 0,
      isLastPage: false
    }
  },
  async asyncData(context) {
    const params = {
      page: 1,
      pageSize: 10
    }
    if (context.route.params.page) {
      if (context.route.params.page === '1') {
        return context.redirect('/')
      }
      params.page = parseInt(context.route.params.page)
    }
    const info = await context.app.$axios.selectArticle(params)
    return {
      articleList: info.data.list,
      total: info.data.total,
      queryForm: params
    }
  },
  created() {
    console.log(this.$route)
  },
  methods: {
    goToArticle(articleId) {
      console.log(articleId)
      this.$router.push({
        name: 'article',
        query: {
          id: articleId
        }
      })
    }
  }
}
</script>

<style lang="stylus" scoped>
#home
  position: relative;
  padding: 30px 10px;
  min-height: 100px;
  .page-more
    text-align center
    cursor pointer
  .page-controls
    display flex
    justify-content center
    align-items center
    padding 10px 0
</style>
