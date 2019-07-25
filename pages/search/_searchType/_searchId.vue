<template>
  <div>
    <div class="list-wrap">
      <div v-if="queryForm.searchType === '1'" class="list-search-bar">
        <el-input
          v-model="queryForm.keyword"
          clearable
          placeholder="请输入搜索内容"
          size="small"
          @keyup.enter.native="getData"
        />
      </div>
      <div v-if="articleList.length !== 0" class="article-list">
        <template v-for="(item, index) in articleList">
          <article-list-card :key="index" class="article" :article="item" />
        </template>
      </div>
      <div v-if="total" class="pagination">
        <el-pagination background layout="prev, pager, next" :total="total" />
      </div>
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
      total: 0,
      articleList: [],
      queryForm: {
        page: 1,
        pageSize: 10,
        keyword: '',
        searchType: this.$route.params.searchType, // 1-搜索 2-分类 3-标签
        searchId: this.$route.params.searchId // 在searchType == 2/3时分别作categroyId/tagId
      }
    }
  },
  created() {
    if (this.queryForm.searchType !== '1') {
      this.getData()
    }
  },
  methods: {
    getData() {
      this.total = 2
      this.articleList = [
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
  animation: show .8s
  .article-list
    padding 10px 100px
    .article
      margin-bottom 20px
      &:last-child
        margin-bottom 0px
  .pagination
    display flex
    justify-content center
    align-items center
    padding 10px 0
  .list-search-bar
    display flex
    justify-content center
    align-items center
    padding 10px 100px

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
