<template>
  <div class="m-footer-wrap">
    <div class="m-footer-view">
      <p>本站已经在运行啦~~~</p>
      <p>@ChenZiAn ---- 一个自学者向世界问好</p>
      <p>
        本站点采用
        <a href="https://creativecommons.org/licenses/by-nc-nd/4.0/deed.zh">
          知识共享 署名-非商业性使用-禁止演绎 4.0 国际 许可协议
        </a>
      </p>
      <p>
        本站由 @ChenZiAn 创建 - © 2019.
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
    min-width 320px
    max-width 1000px
    height 100%
    margin 0 auto
    padding 0 20px
    display flex
    flex-direction column
    justify-content center
    color $color-grey
    p
      margin: 2px 0
      user-select none
    .beian-jump
      text-decoration none
      color $color-grey
      cursor default
</style>
