<template>
  <div>
    <div class="list-wrap">
      <div
        v-if="this.$route.params.searchType === 'keyword'"
        class="list-search-bar"
      >
        <el-input
          v-model="queryForm.keyword"
          clearable
          placeholder="请输入搜索内容"
          size="small"
          @keyup.enter.native="getArticle"
          @clear="reset"
        />
      </div>
      <div v-if="articleForm.list.length !== 0" class="article-list">
        <template v-for="(item, index) in articleForm.list">
          <article-list-card :key="index" class="article" :article="item" />
        </template>
        <div v-if="!articleForm.isLastPage" class="page-more" @click="getMore">
          查看更多
        </div>
        <div v-else class="page-more">
          已经到底啦
        </div>
      </div>
      <div
        v-if="articleForm.list.length === 0 && hasNoResult"
        class="no-result"
      >
        未搜索到相关内容
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
      articleForm: {
        list: [],
        isLastPage: false
      },
      hasNoResult: false,
      queryForm: {
        page: 1,
        pageSize: 10,
        keyword: ''
      }
    }
  },
  async asyncData(context) {
    const query = context.route.params
    console.log(query.searchType)
    if (query.searchType !== 'keyword') {
      const params = {
        page: 1,
        pageSize: 10,
        categoryId: query.searchType === 'category' ? query.searchId * 1 : '',
        tagId: query.searchType === 'tag' ? query.searchId * 1 : ''
      }
      const info = await context.app.$axios.selectArticle(params)
      return {
        articleForm: info.data,
        queryForm: params
      }
    } else {
      return { articleForm: { list: [] } }
    }
  },
  created() {},
  methods: {
    getArticle() {
      this.$axios
        .selectArticle(this.queryForm)
        .then((res) => {
          if (res.resCode === '0000') {
            this.articleForm = res.data
            if (!res.data.total) {
              this.hasNoResult = true
            }
          } else {
            this.$message(res.msg)
          }
        })
        .catch((err) => {
          console.error(err)
        })
    },
    getMore() {
      this.queryForm.page++
      this.$axios
        .selectArticle(this.queryForm)
        .then((res) => {
          if (res.resCode === '0000') {
            const list = this.articleForm.list
            list.push(...res.data.list)
            res.data.list = list
            this.articleForm = res.data
          } else {
            this.$message(res.msg)
          }
        })
        .catch((err) => {
          console.error(err)
        })
    },
    reset() {
      this.hasNoResult = false
      this.total = 0
      this.articleForm = {
        list: [],
        isLastPage: false
      }
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
    .page-more
      text-align center
      cursor pointer
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
  .no-result
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
