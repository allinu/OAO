<template>
  <div class="w-screen h-screen">
    <div id="danmu-screen" class="w-screen h-screen"></div>
    <customlogo
      class="flex justify-center items-center relative top-64"
      :w="w"
    ></customlogo>
  </div>
</template>
<script lang="ts">
import axios from "axios";
let url = "https://v1.hitokoto.cn/?c=j&c=h&c=e&c=d&c=i";
import BulletJs from "js-bullets";
import Customlogo from "@/components/customlogo.vue";

export default {
  name: "Home",
  components: {
    Customlogo,
  },
  data() {
    return {
      w: "10vw",
      words: [],
      tmp: "",
    };
  },
  methods: {
    get_words() {
      axios.get(url).then((response) => {
        this.screen.push("♥ " + response.data["hitokoto"]);
      });
    },
  },
  mounted() {
    this.screen = new BulletJs("#danmu-screen", {});

    setInterval(() => {
      this.get_words();
    }, 1000);
  },
};
</script>

<style scoped>
#danmu-screen {
  position: absolute;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  box-sizing: border-box;
}
</style>