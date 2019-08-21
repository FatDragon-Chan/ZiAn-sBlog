<template>
  <div>
    <div class="categories-wrap">
      <p class="title">
        分类
      </p>
      <div class="categories-container">
        <template v-for="(item, index) in categoriesList">
          <div
            :key="index"
            class="container-btn category-btn"
            @click="goToArticleList(2, item.categoryId)"
          >
            {{ item.categoryName }}
            <span class="category-btn-num">{{ item.articleNum }}篇</span>
          </div>
        </template>
      </div>
      <p class="title">
        标签
      </p>
      <div class="categories-container">
        <template v-for="(item, index) in tagsList">
          <div
            :key="index"
            class="container-btn tag-btn"
            @click="goToArticleList(3, item.tagId)"
          >
            {{ item.tagName }}
          </div>
        </template>
      </div>
    </div>
  </div>
</template>

<script type="text/javascript">
export default {
  layout: 'blog',
  data() {
    return {
      categoriesList: [],
      tagsList: []
    }
  },
  async asyncData(context) {
    // const params = {
    //   page: 1,
    //   pageSize: 5
    // }
    const info = await context.app.$axios.getAllClassify({})
    return {
      categoriesList: info.data.categoriesList,
      tagsList: info.data.tagsList
    }
  },
  methods: {
    goToArticleList(type, id) {
      this.$router.push(`/search/${type === 2 ? 'category' : 'tag'}/${id}`)
    }
  }
}
</script>

<style lang="stylus" scoped>
.categories-wrap
  animation: show .8s
  padding 30px 10px
  .title
    text-align center
    margin-bottom 20px
    font-size 22px
    color $color-main
  .categories-container
    margin-bottom 60px
    display flex
    justify-content center
    align-items center
    flex-wrap wrap
    .container-btn
      padding 5px 10px
      margin 5px
      border-radius 4px
    .category-btn
      cursor pointer
      user-select none
      transition: all .5s
      &:hover
        background-color $color-main
        color $color-white
      border 1px solid $color-line
      font-size 16px
      color $color-main
      @media (max-width: 768px)
        font-size 14px
      .category-btn-num
        color $color-grey
        font-size 12px
    .tag-btn
      font-size: 14px;
      color: rgba(38, 42, 48, 0.2);
      cursor pointer
      user-select none
      position relative
      &:hover
        color:$color-main
      &:after
        content: "";
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        height: 2px;
        background-color: #262a30;
        visibility: hidden;
        transform: scaleX(0);
        transition-duration: .2s;
        transition-timing-function: ease;
      &:hover
        &:after
          visibility: visible
          transform: scaleX(1)
          transition-duration: .2s
          transition-timing-function: ease

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
