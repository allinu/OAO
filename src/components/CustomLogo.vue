<template>
  <div id="logo">
    <i class="nf nf-fa-circle_o_notch"></i>
    <i class="nf nf-fa-heart"></i>
    <i class="nf nf-fa-circle_o_notch"></i>
  </div>
</template>

<script>
export default {
  name: 'CustomLogo',
  data() {
    return {
      heartColor: 'red',
      circleColor: 'black',
    }
  },
}
</script>

<style scoped>
#logo {
  letter-spacing: 0.45em;
}
#logo .nf.nf-fa-heart {
  color: red;
}
</style>