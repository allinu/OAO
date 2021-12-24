<template>
  <div class="h-screen pt-40 w-screen">
    <Heart :size="w" class="mx-auto"></Heart>
  </div>
</template>
<script lang="ts">
import Heart from "@/components/heart.vue";
export default {
  name: "Love",
  components: {
    Heart,
  },
  data() {
    return {
      w: "30vh",
    };
  },
};
</script>
<style scoped>
</style>