<template>
  <div>
    <div class="history-wrap" />
  </div>
</template>

<script>
export default {
  layout: 'blog',
  components: {},
  data() {
    return {
      timeLineHistory: [
        {
          timestamp: '20180726',
          title: '呀?归档的历史',
          createTime: '20180726 12313',
          author: '陈子安',
          articleId: 11
        },
        {
          timestamp: '20180726',
          title: '呀?归档的历史',
          createTime: '20180726 12313',
          author: '陈子安',
          articleId: 11
        },
        {
          timestamp: '20180726',
          title: '呀?归档的历史',
          createTime: '20180726 12313',
          author: '陈子安',
          articleId: 11
        },
        {
          timestamp: '20180726',
          title: '呀?归档的历史',
          createTime: '20180726 12313',
          author: '陈子安',
          articleId: 11
        },
        {
          timestamp: '20180726',
          title: '呀?归档的历史',
          createTime: '20180726 12313',
          author: '陈子安',
          articleId: 11
        }
      ]
    }
  },
  methods: {
    goToDetail(id) {
      console.log('前往文章详情')
    }
  }
}
</script>

<style lang="stylus" scoped>
.history-wrap
  padding 30px 10px
  animation: show .8s
  font-size 20px

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
