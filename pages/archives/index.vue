<template>
  <div>
    <div class="history">
      <div class="block">
        <el-timeline>
          <template v-for="item in timeLineHistory">
            <el-timeline-item
              :timestamp="item.createTime"
              :key="item.articleId"
              placement="top"
            >
              <el-card class="history-wrap" @click="goToDetail">
                <h4>{{ item.title }}</h4>
                <p>王小虎 提交于 2018/4/12 20:46</p>
              </el-card>
            </el-timeline-item>
          </template>
          <el-timeline-item timestamp="2018/4/12" placement="top">
            <el-card class="history-wrap" @click="goToDetail">
              <h4>更新 Github 模板</h4>
              <p>王小虎 提交于 2018/4/12 20:46</p>
            </el-card>
          </el-timeline-item>
        </el-timeline>
      </div>
    </div>
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
