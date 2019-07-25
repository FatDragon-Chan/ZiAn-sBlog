<template>
  <div id="home">
    <template v-for="(item, index) in articleList">
      <article-card :key="index" :article="item" @articleClick="goToArticle" />
    </template>
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
          createdTime: '1561619970000',
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
          createdTime: '1561619970000',
          watches: 5412
        }
      ]
    }
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
</style>
