<template>
  <div id="home">
    <template v-for="(item, index) in articleForm">
      <article-card :key="index" :article="item" @articleClick="goToArticle" />
    </template>
    <div class="page-more" @click="getMore" :class="{'shadow-transition': hasMore}">
      {{hasMore ? '查看更多' : '没有更多啦'}}
    </div>
    <div class="page-controls">
      <div v-if="this.queryForm.page != 1 && this.$route.params && this.$route.params.page" class="page-control shadow-transition" @click="toPrevious">
        {{ queryForm.page > 1? '上一页' :'已经是第一页' }}
      </div>
      <div class="page-control shadow-transition" v-if="hasMore" @click="toNext" >
        {{ hasMore ? '下一页' : '已经是最后一页'}}
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
      articleForm: {},
      hasMore: false
    }
  },
  async asyncData(context) {
    const params = {
      page: 1,
      pageSize: 2,
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
      articleForm: info.data.blogData,
      queryForm: params,
      hasMore: !info.data.isLastPage
    }
  },
  created() {},
  methods: {
    getMore() {
      if (!this.hasMore) return
      this.queryForm.page++
      this.$axios
        .selectArticle(this.queryForm)
        .then((res) => {
          console.log(res)
          if (res.resCode === '0000') {
            this.articleForm.push(...res.data.blogData)
            this.articleForm.isLastPage = res.data.isLastPage
          } else {
            this.queryForm.page--
            this.$message(res.msg)
          }

          this.hasMore = !res.data.isLastPage
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
    },
    toNext() {
      if (!this.hasMore) {
        return
      }
      this.$router.push(`/home/${this.queryForm.page + 1}`)
    },
    toPrevious() {
      if (this.queryForm.page <= 1) {
        return
      }
      this.$router.push(`/home/${this.queryForm.page - 1}`)
    }
  }
}
</script>

<style lang="stylus" scoped>
#home
  position relative
  padding 30px 10px
  min-height 100px
  .page-more
    user-select none
    text-align center
    padding 10px 0
    position relative
    transition all 0.75s
    margin-bottom 10px

  .page-controls
    user-select none
    display flex
    justify-content space-around
    align-items center
    .page-control
      flex 1
      text-align center
      padding 10px 0
// 阴影效果
.shadow-transition
  position relative
  transition all 0.75s
  &::after
    cursor pointer
    content ''
    position absolute
    left 0
    right 0
    top 0
    bottom 0
    box-shadow 0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04)
    transition: all 0.75s;
    opacity 0
  &:hover
    color $color-text-stress
    &::after
      opacity 1
</style>
