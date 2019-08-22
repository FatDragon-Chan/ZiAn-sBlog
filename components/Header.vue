<template>
  <div class="m-header-wrap">
    <div class="m-header-navbar" :style="{ height: '90px' }">
      <a href="http://www.chenzian.cn" target="_blank" class="header-logo">
        <div class="line" />
        <p class="blog-name">
          ChenZiAn
        </p>
        <div class="line" />
      </a>
      <header-tab-view />
    </div>
  </div>
</template>

<script>
import headerTabView from './headerTabView'
export default {
  name: 'Home',
  components: {
    headerTabView
  }
}
</script>

<style lang="stylus">
.m-header-wrap
  position relative
  width 100%
  background-color $color-bg-grey
  .m-header-navbar
    max-width 1000px
    display flex
    flex-direction row
    justify-content space-between
    align-items center
    padding 0 10px
    margin 0 auto
    transition: all .5s
    .header-logo
      height 100%
      justify-content space-between
      padding 25px
      box-sizing border-box
      font-size 20px
      font-weight 700
      display flex
      flex-direction column
      color $color-main
      animation: logo-name .5s
      transition: all .5s
      &:hover
        cursor: pointer
        .line
          width: 0px
      .line
        width 70px
        background-color $color-main
        height 2px
        margin 0 auto
        animation: logo-line .5s
        transition: width .3s
    .toggle
      width: 24px
      height: 24px
      background-color: #f9f9f9
      padding: 5px
      cursor: pointer
      line-height: 0
      .toggle-line
        position: relative
        display: inline-block
        vertical-align: top
        width: 100%
        height: 2px
        margin-top: 4px
        background-color: $color-main
        &:first-child
          margin-top: 0px
  .mobile-tab-wrap
    width: 100%
    transition: all .3s
    // overflow: hidden
    border-top: 1px solid #eeeeee
    .tab
      position: relative
      width: 100%
      padding: 8px 15px
      font-size: 12px
      line-height: 1
      .iconfont
        font-size: 12px
        margin-right: 5px
@keyframes logo-name {
  from {
    margin-left: -60px;
    opacity: 0
  }
  to {
    margin-left: 0px;
    opacity: 1
  }
}
@keyframes logo-line {
  from {
    width: 0px;
  }
  to {
    width: 70px;
  }
}
</style>
