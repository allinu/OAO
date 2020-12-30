<template>
  <div class="ui container field red">
    <MenuBarBase></MenuBarBase>
    <!-- NOTE 下面显示路由主体内容 -->
    <router-view />
  </div>
</template>

<script>
import MenuBarBase from "@/components/MenuBarBase";
export default {
  name: "App",
  components: {
    MenuBarBase,
  },
};
</script>

<style>
* {
  font-family: "SCR",serif;
}
text {
  font-family: "SCR",serif;
}
</style>
