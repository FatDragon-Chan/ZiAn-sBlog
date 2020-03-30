<template>
  <div id="home">
    <template v-for="(item, index) in articleForm.list">
      <article-card :key="index" :article="item" @articleClick="goToArticle" />
    </template>
    <div v-if="!articleForm.isLastPage" class="page-more" @click="getMore">
      查看更多
    </div>
    <div v-if="articleForm.pageSize !== 5" class="page-controls">
      <a v-if="queryForm.page > 1" :href="`/home/${queryForm.page - 1}`">
        上一页
      </a>
      <div v-else>
        已经是第一页
      </div>
      <a v-if="!articleForm.isLastPage" :href="`/home/${queryForm.page + 1}`">
        下一页
      </a>
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
      articleForm: {}
    }
  },
  async asyncData(context) {
    const params = {
      page: 1,
      pageSize: 5,
      status: 1
    }
    if (context.route.params.page) {
      if (context.route.params.page <= 1) {
        return context.redirect('/')
      }
      params.page = parseInt(context.route.params.page)
    }
    const info = await context.app.$axios.selectArticle(params)
    if (info.data.isLastPage) {
      params.page = info.data.lastPage
    }
    return {
      articleForm: info.data,
      queryForm: params
    }
  },
  created() {},
  methods: {
    getMore() {
      this.queryForm.page++
      this.$axios
        .selectArticle(this.queryForm)
        .then((res) => {
          console.log(res)
          if (res.resCode === '0000') {
            this.articleForm.list.push(...res.data.list)
            this.articleForm.isLastPage = res.data.isLastPage
          } else {
            this.queryForm.page--
            this.$message(res.msg)
          }
        })
        .catch((err) => {
          this.queryForm.page--
          console.error(err)
        })
    },
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
    justify-content space-around
    align-items center
    padding 10px 0
</style>
