<template>
  <div class="w-screen h-screen dark:bg-black dark:text-white bg-white">
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

class RAF {
  constructor () {
    this.init()
  }
  init () {
    this._timerIdMap = {
      timeout: {},
      interval: {}
    }
  }
  run (type = 'interval', cb, interval = 16.7) {
    const now = Date.now
    let stime = now()
    let etime = stime
    //创建Symbol类型作为key值，保证返回值的唯一性，用于清除定时器使用
    const timerSymbol = Symbol()
    const loop = () => {
      this.setIdMap(timerSymbol, type, loop)
      etime = now()
      if (etime - stime >= interval) {
        if (type === 'interval') {
          stime = now()
          etime = stime
        }
        cb()
        type === 'timeout' && this.clearTimeout(timerSymbol)
      }
    }
    this.setIdMap(timerSymbol, type, loop)
    return timerSymbol // 返回Symbol保证每次调用setTimeout/setInterval返回值的唯一性
  }
  setIdMap (timerSymbol, type, loop) {
    const id = requestAnimationFrame(loop)
    this._timerIdMap[type][timerSymbol]= id
  }
  setTimeout (cb, interval) {  // 实现setTimeout 功能
    return this.run('timeout', cb, interval)
  }
  clearTimeout (timer) {
    cancelAnimationFrame(this._timerIdMap.timeout[timer])
  }
  setInterval (cb, interval) { // 实现setInterval功能
    return this.run('interval', cb, interval)
  }
  clearInterval (timer) {
    cancelAnimationFrame(this._timerIdMap.interval[timer])
  }
}

export default {
  name: "Home",
  components: {
    Customlogo,
  },
  data() {
    return {
      w: "80px",
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
    var raf = new RAF();
    var _get_words = raf.setInterval(() => {
      this.get_words();
    }, 1000);
    raf.setTimeout(() => {
      raf.clearInterval(_get_words);
    }, 100000);
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
.bullet-item-style {
  background:rgb(13, 4, 90);
  color: white;
  border:1px solid #fff;
}
</style>