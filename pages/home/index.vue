<template>
  <div id="home">
    <template v-for="(item, index) in articleList">
      <article-card :key="index" :article="item" @articleClick="goToArticle" />
    </template>
    <div v-if="total" class="pagination">
      <el-pagination
        background
        layout="prev, pager, next"
        :total="total"
        @current-change="pageChange"
      />
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
      total: 0
    }
  },
  async asyncData(context) {
    const params = {
      page: 1,
      pageSize: 10
    }
    const info = await context.app.$axios.selectArticle(params)
    return {
      articleList: info.data.list,
      total: info.data.total,
      queryForm: params
    }
  },
  methods: {
    getData() {
      console.log(this)
    },
    goToArticle(articleId) {
      console.log(articleId)
      this.$router.push({
        name: 'article',
        query: {
          id: articleId
        }
      })
    },
    pageChange(page) {
      this.getData()
    }
  }
}
</script>

<style lang="stylus" scoped>
#home
  position: relative;
  padding: 30px 10px;
  min-height: 100px;
  .pagination
    display flex
    justify-content center
    align-items center
    padding 10px 0
</style>
