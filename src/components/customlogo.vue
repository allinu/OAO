<template>
    <div class="main">
        <span :style="{fontSize: w, width: w,position: relative}"></span>
        <Heart :size="w"></Heart>
        <span :style="{fontSize: w, width: w, padding:'0 0 0 5px',position: relative}"></span>
    </div>
</template>
<script>
import Heart from "@/components/heart.vue";
export default {
  name: "Customlogo",
  data() {
    return {};
  },
  components: {
    Heart,
  },
  props: {
    w: {
      type: String,
      default: "100px",
    },
  },
};
</script>
<style lang="css">
</style>