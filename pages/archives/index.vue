<template>
  <div>
    <div class="history">
      <div class="block">
        <el-timeline>
          <template v-for="item in timeLineHistory">
            <el-timeline-item
              :key="item.articleId"
              :timestamp="item.createTime"
              placement="top"
            >
              <el-card class="history-wrap" @click="goToDetail">
                <h4>{{ item.articleTitle }}</h4>
                <p>{{ item.articleDesc }}</p>
              </el-card>
            </el-timeline-item>
          </template>
        </el-timeline>
      </div>
    </div>
  </div>
</template>

<script>
import dayjs from 'dayjs'
export default {
  layout: 'blog',
  components: {},
  data() {
    return {
      timeLineHistory: [
        {
          timestamp: '20180726',
          title: '呀?归档的历史',
          createTime: '2018/07/26 12313',
          author: '陈子安',
          articleId: 11
        },
        {
          timestamp: '20180726',
          title: '呀?归档的历史',
          createTime: '20180726 12313',
          author: '陈子安',
          articleId: 12
        },
        {
          timestamp: '20180726',
          title: '呀?归档的历史',
          createTime: '20180726 12313',
          author: '陈子安',
          articleId: 13
        },
        {
          timestamp: '20180726',
          title: '呀?归档的历史',
          createTime: '20180726 12313',
          author: '陈子安',
          articleId: 14
        },
        {
          timestamp: '20180726',
          title: '呀?归档的历史',
          createTime: '20180726 12313',
          author: '陈子安',
          articleId: 15
        }
      ],
      queryForm: {}
    }
  },
  async asyncData(context) {
    const params = {
      page: 1,
      pageSize: 10,
      status: 1
    }
    const info = await context.app.$axios.selectArticle(params)
    if (info.data.isLastPage) {
      params.page = info.data.lastPage
    }
    info.data.list.map((item) => {
      item.createTime = dayjs(item.createTime).format('YYYY-MM-DD')
    })
    return {
      timeLineHistory: info.data.list,
      resData: info.data,
      queryForm: params
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
.history
  padding 30px 10px
  animation: show .8s
  font-size 20px
  &-wrap
    cursor pointer

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
