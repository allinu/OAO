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
    var raf = new RAF();
    var _push_words = raf.setInterval(() => {
      this.push_words();
    }, 2000);
    raf.setTimeout(() => {
      raf.clearInterval(_push_words);
    }, 100000);
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