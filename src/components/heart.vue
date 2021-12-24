<template>
    <div :style="{width: size, height: size,}">
      <div class="heart heart-left"></div>
      <div class="heart heart-right"></div>
      <div class="heart heart-bottom"></div>
    </div>
</template>
<script lang="ts">
export default {
  name: "Heart",
  data() {
    return {};
  },
  props: {
    size: {
      type: String,
      default: "100px",
    },
  },
};
</script>
<style lang="css">
.heart {
  position: relative;
  width: 50%;
  height: 50%;
  background: linear-gradient(-90deg, #f50a45 0%, #d5093c 40%);
  box-shadow: 0 0 40px #d5093c;
  animation: beat 1.7s infinite ease normal;
}

.heart-left {
  top: 10%;
  left: 5%;
  z-index: 2;
  border-radius: 50%;
}

.heart-right {
  right: -45%;
  top: -40%;
  z-index: 1;
  border-radius: 50%;
}

.heart-bottom {
  top: -70%;
  right: -25%;
  z-index: 0;
  border-radius: 5px;
  background: #d5093c;
}

@keyframes beat {
  0% {
    transform: scale(1) rotate(225deg);
    box-shadow: 0 0 40px #d5093c;
  }
  50% {
    transform: scale(1.1) rotate(225deg);
    box-shadow: 0 0 70px #d5093c;
  }
  100% {
    transform: scale(1) rotate(225deg);
    box-shadow: 0 0 40px #d5093c;
  }
}
</style>