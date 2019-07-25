<template>
  <div class="m-footer-wrap">
    <div class="m-footer-view">
      <p>
        HomeBy
        <a target="_blank" href="https://github.com/ChenZiAn1995">
          @ChenZiAn
        </a>
      </p>
      <p>
        © 2019
        <a class="beian-jump" href="http://www.beian.miit.gov.cn">
          粤ICP备19029744号
        </a>
      </p>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="stylus" scoped>
.m-footer-wrap
  height 120px
  width 100%
  position relative
  background-color $color-main
  .m-footer-view
    font-size 14px
    min-width 320px
    max-width 1000px
    height 100%
    margin 0 auto
    padding 0 20px
    display flex
    flex-direction column
    justify-content center
    align-items center
    color $color-grey
    p
      margin: 2px 0
      padding 4px
      user-select none
    .beian-jump
      text-decoration none
      color $color-grey
      cursor default
a:visited
  color $color-grey
  &:hover
    color gold
</style>
