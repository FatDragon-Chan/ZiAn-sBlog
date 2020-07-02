<template>
  <div class="article-card-wrap">
    <div
      class="article-cover"
      :style="{ backgroundImage: 'url(' + article.artCover + ')' }"
    >
      <div class="article-title">
        <span @click="goToArticle(article.id)">{{ article.artTitle }}</span>
      </div>
    </div>
    <div class="article-content">
      <div class="article-info">
        发表于 {{ article.createTime }} •
        <span
          class="article-category"
          @click="toList('category', article.catId)"
        >
          {{ article.catName }}
        </span>
        •
        <span class="article-watches">{{ article.artVisited }}</span>
        人围观
      </div>
      <div class="article-Desc">
        {{ article.artDesc }}
      </div>
      <div class="article-tagsBox">
        <div
          v-for="(item, index) in article.tagIds.split(',')"
          :key="index"
          class="article-tag"
          @click="toList('tag', item.tagId)"
        >
          <!--<i class="iconfont icon-icon_tag" />-->
          {{ item }}
        </div>
      </div>
      <div class="article-readMore" @click="goToArticle(article.id)">
        阅读全文
      </div>
    </div>
  </div>
</template>

<script>
import dayjs from 'dayjs'
export default {
  name: 'ArticleCard',
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
    goToArticle(id) {
      this.$router.push(`/article/${id}`)
    },
    toList(status, id) {
      this.$router.push(`/search/${status}/${id}`)
    }
  }
}
</script>

<style lang="stylus" scoped>
.article-card-wrap
  padding 20px
  margin-bottom 20px
  box-shadow 0 0 5px 0 rgba(38,42,48,.1)
  animation: show .8s
  min-height 603px
  line-height 1.2
  transition all .5s
  position: relative
  .article-cover
    position: relative
    background-position 50%
    background-size cover
    &:before
      top: 0
      left: 0
      width: 100%
      padding-top: 50%
      content: ' '
      background: rgba(0, 0, 0, .3)
      display: block
    .article-title
      position absolute
      top 0
      left 0
      height 100%
      width 100%
      display flex
      justify-content center
      align-items center
      font-weight bold
      color $color-white
      padding 10px
      font-size 24px
      span
        position: relative
        cursor: pointer
        -webkit-tap-highlight-color: rgba(0, 0, 0, 0)
        user-select none
        &:after
          content ""
          position absolute
          bottom: 0px
          left: 0
          width: 100%
          height: 2px
          background-color: $color-white
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
  .article-content
    .article-info
      padding 20px 0
      text-align center
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
      font-size 16px
      @media (max-width: 768px)
        font-size: 14px
    .article-tagsBox
      width 100%
      padding 10px 0
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
    .article-readMore
      display inline-block
      position relative
      margin-top 20px
      font-size 14px
      @media (max-width: 768px)
        font-size: 12px
      &:after
        content ''
        position absolute
        left 0
        bottom 0
        width 100%
        height 1px
        background-color $color-main
        transform: scaleX(1)
        transition-duration: .2s
        transition-timing-function: ease
      &:hover
        cursor pointer
        &:after
          visibility: visible
          transform: scaleX(0)
          transition-duration: .2s
          transition-timing-function: ease
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
