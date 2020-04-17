<template>
  <div id="tabbar">
      <slot></slot>
    </div>
</template>

<script>
export default {
  name: 'TabBar'
}
</script>

<style>

  #tabbar {
    display: flex;
    background-color: #f6f6f6;

    position: fixed;
    /* 两个都设置保证占满整个屏幕 */
    left: 0;
    right: 0;
    bottom: 0;

    box-shadow: 0 -1px 1px rgba(100, 100, 100, .2);
  }


</style>