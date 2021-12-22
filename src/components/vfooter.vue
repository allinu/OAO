<template>
    <div class="flex p-10 border-t-2 border-dashed">
        <div>
            <Heart :size="w"></Heart>
            <br>
            <p class="text-base">Designed by Liona Maskros.</p>
            <p class="text-base">由Liona制作</p>
        </div>
    </div>
</template>
<script>
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