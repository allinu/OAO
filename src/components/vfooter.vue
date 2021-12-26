<template>
    <div class="flex p-10 pt-12 border-t-2 border-dashed">
        <div class="flex">
            <Heart :size="w"></Heart>
            <div class="ml-10">
              <p class="text-base">Designed by <a href="mailto:lionacc@163.com" class=" text-blue-900 underline"> Liona Maskros</a>.</p>
              <p class="text-base">由 <a href="mailto:lionacc@163.com" class=" text-blue-900 underline">Liona</a> 制作</p>
            </div>            
        </div>
    </div>
</template>
<script lang="ts">
import Heart from "@/components/heart.vue";
export default {
  name: "vfooter",
  data() {
    return { w: "50px" };
  },
  components: {
    Heart,
  },
};
</script>
<style lang="css" scoped>
</style>