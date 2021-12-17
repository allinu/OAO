<template>
<div class="w-screen h-screen">
  <div id="danmu-screen"></div>
  <div class="pt-64">
    <Heart :size=w class="mx-auto"></Heart>
    <h2 class="text-3xl text-center mt-10">Nothing but love.</h2>
  </div>
  
</div>
</template>
<script>
import Heart from "@/components/heart.vue";
import BulletJs from "js-bullets";
export default {
  name: "About",
  components: {
    Heart,
  },
  data() {
    return {
      w: "20vh",
      sites: [
        {
          image: "",
          name: "沐雨听风",
          url: '<a href="https://valesec.top" target="_blank" class="underline">https://valesec.top</a>',
        },
        {
          image: "",
          name: "Change the world",
          url: '<a href="https://zjianru.top/" target="_blank" class="underline">https://zjianru.top/</a>',
        },
        {
          image: "",
          name: "Lluna's Pure land.",
          url: '<a href="https://lunamoore.github.io/" target="_blank" class="underline">https://lunamoore.github.io/</a>',
        }
      ],
    };
  },
  created() {},
  methods: {
    push_words() {
      for (var i = 0; i < this.sites.length; i++) {
        this.screen.push(
          " " + this.sites[i].name + " :  " + this.sites[i].url
        );
      }
    },
  },
  mounted() {
    this.screen = new BulletJs("#danmu-screen", {
      pauseOnHover: true,
    });

    setInterval(() => {
      this.push_words();
    }, 3000);
  },
};
</script>
<style lang="css">
#danmu-screen {
  position: absolute;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  box-sizing: border-box;
  z-index: -1;
}
.bullet-item-style {
  background: rgb(21, 33, 88);
  color: white;
}
</style>