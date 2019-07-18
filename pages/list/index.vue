<template>
  <div class="list-wrap">
    <div class="article-list">
      <template v-for="(item, index) in articleList">
        <article-list-card :key="index" class="article" :article="item" />
      </template>
    </div>
    <div class="pagination">
      <el-pagination background layout="prev, pager, next" :total="10" />
    </div>
  </div>
</template>

<script>
import articleListCard from '~/components/ArticleListCard.vue'
export default {
  layout: 'blog',
  components: {
    articleListCard
  },
  data() {
    return {
      articleList: [
        {
          articleId: 1,
          articleTitle: '我是第一篇文章',
          articleMainMap:
            'https://qiniu.chenfeng1995.cn/young-woman-using-phone-to-take-a-picture-860x573.jpg',
          tags: [{ name: '标签1', tagId: 111 }, { name: '标签2', tagId: 112 }],
          articleDesc: '我是第一篇文章的副标题',
          categorieId: 11,
          categorieName: '文档类别',
          creationTime: '1561619970000',
          watches: 13
        },
        {
          articleId: 2,
          articleTitle: '我是第二篇文章',
          articleMainMap:
            'https://qiniu.chenfeng1995.cn/47812355881_f74329ec64_o-860x1147.jpg',
          tags: [{ name: '标签1', tagId: 111 }, { name: '标签2', tagId: 112 }],
          articleDesc: '我是第二篇文章的副标题',
          categorieId: 12,
          categorieName: '分类名称',
          creationTime: '1561619970000',
          watches: 5412
        }
      ]
    }
  }
}
</script>

<style lang="stylus" scoped>
.list-wrap
  padding 30px 10px
  .article-list
    padding 10px 30px
    .article
      margin-bottom 20px
      &:last-child
        margin-bottom 0px
  .pagination
    display flex
    justify-content center
    align-items center
    padding 10px 0
</style>
