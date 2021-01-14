<template>
  <div class="ui container">
    <h1 class="ui header">
      <font-awesome-icon
        icon="circle-notch"
        size="4x"
        :color="circleColor"
      ></font-awesome-icon>
      <font-awesome-icon
        icon="heart"
        size="4x"
        id="heart"
        :color="heartColor"
        class="looping animating transition pulse"
      ></font-awesome-icon>
      <font-awesome-icon
        icon="circle-notch"
        size="4x"
        :color="circleColor"
      ></font-awesome-icon>
    </h1>
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
#heart {
  animation-duration: 1000ms;
}
</style>