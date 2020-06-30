<template>
  <div id="detail">
    <div class="article-wrap">
      <div class="article-message">
        <div class="article-title">
          {{ articleData.artTitle }}
        </div>
        <div class="article-info">
          <i class="el-icon-date" />
          {{ ` 发表于 ${articleData.createTime} • ` }}
          <i class="el-icon-folder" />
          <a href="">游戏开发</a>
          {{ ` • ` }}
          <i class="el-icon-view" />
          {{ ` ${articleData.artVisited} 人围观` }}
        </div>
        <div class="article-desc">
          {{ articleData.artDesc }}
        </div>
        <div class="article-content">
          {{ articleData.artContent }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import dayjs from 'dayjs'
export default {
  layout: 'blog',
  data() {
    return {
      articleData: {}
    }
  },
  async asyncData(context) {
    // await console.log(context.route.params.articleId)
    const params = {
      artId: context.route.params.articleId
    }
    const info = await context.app.$axios.POST(
      '/api/blog/getArticleDetail',
      params
    )
    info.data.createTime = dayjs(info.data.createTime).format('YYYY-MM-DD')
    return {
      articleData: info.data
    }
  },
  methods: {
    getArticle() {}
  }
}
</script>

<style lang="stylus" scoped>
#detail
  position relative
  padding 30px 10px
  .article-wrap
    padding 30px
    box-shadow 0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04)
    .article-message
      text-align center
      .article-title
        font-size 26px
        font-weight 700
        color #262a30
      .article-info
        font-size 14px
        padding 12px 0
      .article-desc
        font-size 14px
        padding-bottom 14px
        color #999999
</style>
