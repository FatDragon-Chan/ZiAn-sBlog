<template>
  <div class="article-list-card" @click="goToArticle(article.articleId)">
    <div class="article-title">
      <span>{{ article.articleTitle }}</span>
    </div>
    <div class="article-info">
      发表于 {{ article.createTime }} •
      <span class="article-category" @click="toList(2, article.categoryId)">
        {{ article.categoryName }}
      </span>
      •
      <span class="article-watches">{{ article.watches }}</span>
      人围观
    </div>
    <div class="article-Desc">
      {{ article.articleDesc }}
    </div>
    <div class="article-tagsBox">
      <div
        v-for="(item, index) in article.tags"
        :key="index"
        class="article-tag"
        @click="toList('tag', item.tagId)"
      >
        <i class="iconfont icon-icon_tag" />
        {{ item.name }}
      </div>
    </div>
  </div>
</template>

<script>
import dayjs from 'dayjs'
export default {
  name: 'ArticleListCard',
  props: {
    article: {
      default: () => {},
      type: Object
    }
  },
  data() {
    return {}
  },
  created() {
    this.article.createTime = dayjs(this.article.createTime).format(
      'YYYY-MM-DD'
    )
  },
  methods: {
    toList(status, id) {
      this.$router.push(`/search/${status}/${id}`)
    },
    goToArticle(articleId) {
      this.$router.push(`/article/${articleId}`)
    }
  }
}
</script>

<style lang="stylus" scoped>
.article-list-card
  cursor pointer;
  line-height 1.2
  padding 20px
  @media (max-width: 768px)
    padding 10px
  box-shadow 0 0 5px 0 rgba(38,42,48,.1)
  animation: show .8s
  transition all .5s
  position relative
  .article-title
    position relative
    color $color-main
    font-size 22px
    @media (max-width: 768px)
      font-size: 18px
    span
      position: relative
      cursor: pointer
      -webkit-tap-highlight-color: rgba(0, 0, 0, 0)
      user-select none
      &:after
        content ""
        position absolute
        bottom: -4px
        left: 0
        width: 100%
        height: 1px
        background-color: $color-main
        visibility: hidden
        transform: scaleX(0)
        transition-duration: .2s
        transition-timing-function: ease
      &:hover
        &:after
          visibility: visible
          transform: scaleX(1)
          transition-duration: .2s
          transition-timing-function: ease
  .article-info
      margin 10px 0
      font-size 14px
      transition all .5s
      @media (max-width: 768px)
        font-size: 12px
      .article-category
        text-decoration underline
        cursor pointer
  .article-Desc
    border-left 2px solid $color-black
    padding-left 5px
    margin-bottom 10px
    font-size 16px
    @media (max-width: 768px)
      font-size: 14px
  .article-tagsBox
    width 100%
    padding 0px 0 10px
    margin-bottom 10px
    border-bottom 1px solid $color-line
    display flex
    justify-content flex-start
    align-items center
    flex-wrap wrap
    .article-tag
      font-size 12px
      line-height 12px
      margin 10px 5px 0 10px
      padding 5px
      color $color-white
      border-radius 6px
      background-color $color-main
      user-select none
      cursor pointer
      position relative
      transition: all .3s
      &:hover
        &:before
          border-right: 12px solid lighten($color-main, 20%)
        background-color lighten($color-main, 20%)
      &:before
        position: absolute
        left: -8px
        top: 0
        width: 0
        height: 0
        content: ""
        border-top: 11px solid transparent
        border-bottom: 11px solid transparent
        border-right: 12px solid $color-main
        transition: all .3s
    .icon-icon_tag
      font-size 12px
      line-height 12px

@keyframes show {
  from {
    margin-top: -10px;
    opacity: 0;
  }
  to {
    margin-top: 0px;
    opacity: 1;
  }
}
</style>
