<template>
  <div class="tab-bar-item" @click="btnClick">
    <!-- <img src="../../assets/img/tabbar/home.svg" alt="">
    <div>首页</div> -->
    <!-- 动态获取 -->
    <div v-if="!isActive"><slot name="item-icon"></slot></div>
    <div v-else><slot name="item-icon-active"></slot></div>
    <div :style="activeStyle"><slot name="item-text"></slot></div>
  </div>
</template>

<script>
export default {
  name: 'TabBarItem',
  props: {
    path: String,
    activeColor: {
      type: String,
      default: 'red'
    }
  },
  data() {
    return {
      // isActive: true
    }
  },
  computed: {
    isActive() {
      // 判断当前活跃路由是否等于props传进来的值 是等于true 否则等于false
      // indexOf 如果检查的值没有出现 则返回 -1（找到该值 不等于负一）
      return this.$route.path.indexOf(this.path) !== -1
    },
    activeStyle() {
      // 判断isActive是否处于活跃 是就给颜色 否则加空对象
      // isActive 如果处于活跃 == true
      return this.isActive ? {color: this.activeColor} : {}
    }
  },
  methods: {
    btnClick() {
      // console.log('btnClick');
      this.$router.replace(this.path)
    }
  }
}
</script>

<style>
  
  .tab-bar-item {
    flex: 1;
    text-align: center;
    height: 49px;
    font-size: 14px;
  }

  .tab-bar-item img {
    width: 24px;
    height: 24px;
    margin-top: 3px;
    vertical-align: middle;
    margin-bottom: 2px;
  }

  .active {
    color: red;
  }

</style>