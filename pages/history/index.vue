<template>
  <div class="history-wrap">
    <el-timeline>
      <el-timeline-item timestamp="2018/4/12" placement="top">
        <el-card @click="goToDetail">
          <h4>更新 Github 模板</h4>
          <p>王小虎 提交于 2018/4/12 20:46</p>
        </el-card>
      </el-timeline-item>
      <el-timeline-item timestamp="2018/4/3" placement="top">
        <el-card>
          <h4>更新 Github 模板</h4>
          <p>王小虎 提交于 2018/4/3 20:46</p>
        </el-card>
      </el-timeline-item>
      <el-timeline-item timestamp="2018/4/2" placement="top">
        <el-card>
          <h4>更新 Github 模板</h4>
          <p>王小虎 提交于 2018/4/2 20:46</p>
        </el-card>
      </el-timeline-item>
    </el-timeline>
  </div>
</template>

<script>
export default {
  layout: 'blog',
  data() {
    return {}
  },
  methods: {
    goToDetail() {
      console.log('前往文章详情')
    }
  }
}
</script>

<style lang="stylus" scoped>
.history-wrap
  padding 30px 10px
  animation: show .8s

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
