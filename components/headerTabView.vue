<template>
  <div id="header-navbar">
    <div
      v-for="(tab, index) in tabs"
      :key="index"
      class="header-navbar-btn"
      @click="selectTab(tab)"
    >
      <i class="iconfont" :class="tab.icon" />
      <span>{{ tab.name }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HeaderTabView',
  props: {
    tabs: {
      default: () => [],
      type: Array
    }
  },
  data() {
    return {}
  },
  methods: {
    selectTab(tab) {
      this.$router.push(tab.to)
    }
  }
}
</script>

<style lang="stylus" scoped>
#header-navbar
  position relative
  display flex
  justify-content flex-end
  align-items center
  cursor pointer
  animation show .5s
  .header-navbar-btn
    color $color-main
    margin-right 8px
    padding 4px 10px
    display flex
    justify-content center
    align-items center
    user-select: none
    border-radius 4px
    transition: all .5s
    &:hover
      background-color $color-main
      color $color-white

@keyframes show {
  from {
    margin-top: -30px;
    opacity: 0;
  }
  to {
    margin-top: 0px;
    opacity: 1;
  }
}
</style>
