<template>
  <div></div>
</template>

<script>
import anime from "animejs/lib/anime.es.js";

export default {
  name: "Login",
  data() {
    return {};
  },
  mounted() {
    anime({
      targets: ".moved",
      translateX: 50,
      direction: "alternate",
      autoplay: true,
      loop: true,
      easing: "easeInOutSine",
    });
  },
  components: {
    // CustomLogo
  },
};
</script>

<style lang="css" scoped>
* {
  font-family: SCR, serif;
}

.ui.container {
  width: 100%;
  height: 100%;
  background: rgb(189, 188, 188);
  position: fixed;
}

.card {
  margin: 0;
  padding: 0;
  width: 700px;
  height: 300px;
  border-radius: 5px;
  margin: 300px auto;
  display: flex;
  flex-direction: row;
  position: relative;
}
.card .moved {
  margin: 0;
  padding: 0;
  top: 0;
  left: 0;
  width: 700px;
  height: 300px;
  background: linear-gradient(
    to right,
    rgba(0, 0, 255, 0.603),
    rgba(255, 0, 0, 0.603)
  );
  border-radius: 5px;
  position: absolute;
}

.card .male {
  width: 100px;
  height: 100px;
  background: rgba(0, 0, 255, 0.603);
  border-radius: 100px;
  position: absolute;
  top: 33%;
  left: 30%;
  mix-blend-mode: multiply;
}
.card .female {
  width: 100px;
  height: 100px;
  background: rgba(255, 0, 0, 0.603);
  border-radius: 100px;
  position: absolute;
  top: 33%;
  right: 30%;
  mix-blend-mode: multiply;
}
.card .middle {
  height: 100px;
  width: 100px;
  background: white;
  border-radius: 100px;
  position: relative;
  top: 33%;
  margin: 0 auto;
  mix-blend-mode: multiply;
}
.card .bg-color {
  width: 100px;
  height: 100px;
  background-color: black;
  border-radius: 100px;
  position: relative;
  margin: 0 auto;
  top: 33%;
}
</style>
