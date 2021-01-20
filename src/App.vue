<template>
  <div class="ui attached">
    <!-- NOTE 导航栏 -->
    <MenuBarBase></MenuBarBase>
    <!-- NOTE 下面显示路由主体内容 -->
    <router-view />
    <!-- NOTE 下面显示页脚 -->
    <Footer></Footer>
  </div>
</template>

<script>
import MenuBarBase from '@/components/MenuBarBase'
import Footer from '@/components/Footer'
export default {
  name: 'App',
  components: {
    MenuBarBase,
    Footer,
  },
}
</script>

<style>
* {
  font-family: 'SCM', 'NFR';
}
text {
  font-family: 'SCM', 'NFR';
}
</style>
