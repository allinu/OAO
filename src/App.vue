<template>
  <navbar id="navbar" class="w-full fixed z-10"></navbar>
  <router-view id="main" class="h-full overflow-scroll bg-white dark:bg-black text-black dark:text-white"/>
</template>

<script lang="ts">
import navbar from "@/components/navbar.vue";

export default {
  name: "App",
  components: {
    navbar,
  },
  data() {
    return {};
  },
};
</script>

<style>
* {
  font-family: "NFM", "SCM";
}
.bullet-item-style {
  /* color: #fff; */
  color: rgb(156, 25, 25);
  position: relative;
  border-radius: 10px;
  padding: 0 20px;
}
</style>