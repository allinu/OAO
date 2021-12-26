<template>
  <navbar id="navbar" class="w-full fixed z-10"></navbar>
  <router-view id="main" class="h-full overflow-scroll"/>
</template>

<script lang="ts">
import navbar from "@/components/navbar.vue";
import foter from "@/components/vfooter.vue";

export default {
  name: "App",
  components: {
    navbar,
    foter,
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
  color: #700;
  position: relative;
  z-index: -99;
  /* background: #700a; */
  border-radius: 10px;
  padding: 0 20px;
}
</style>