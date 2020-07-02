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
          <span
            style="cursor: pointer"
            @click="enterSearch('category', articleData.catId)"
          >
            {{ articleData.catName }}
          </span>
          {{ ` • ` }}
          <i class="el-icon-view" />
          {{ ` ${articleData.artVisited} 人围观` }}
        </div>
        <div class="article-desc">
          {{ articleData.artDesc }}
        </div>
        <div
          class="article-content markdown-body md"
          v-html="articleData.artContent"
        />
      </div>
    </div>
  </div>
</template>

<script>
import dayjs from 'dayjs'
import marked from '@/utils/highlight'
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
    // 处理富文本文字
    info.data.artContent = marked(info.data.artContent)
    info.data.createTime = dayjs(info.data.createTime).format('YYYY-MM-DD')
    return {
      articleData: info.data
    }
  },
  methods: {
    enterSearch(status, id) {
      this.$router.push(`/search/${status}/${id}`)
    }
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
      .article-content
        text-align left
</style>
