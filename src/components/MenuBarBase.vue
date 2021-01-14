<template>
  <div class="ui secondary pointing big menu">
    <!-- NOTE 左边的logo -->
    <router-link class="item" to="/home">
      <slot name="logo">
        <font-awesome-icon icon="circle-notch"></font-awesome-icon>
        <font-awesome-icon
          icon="heart"
          id="heart"
          color="red"
          class="looping animating transition pulse"
        >
        </font-awesome-icon>
        <font-awesome-icon icon="circle-notch"></font-awesome-icon>
      </slot>
    </router-link>
    <router-link class="item" to="/diary">日 记</router-link>
    <router-link class="item" to="/event">事 件</router-link>
    <router-link class="item" to="/gallery">相 册</router-link>
    <div class="right menu">
      <!-- NOTE 右边的菜单 -->
      <slot name="right_menu">
        <router-link class="item compact" to="/prefrence">
          <i class="icon setting"></i>
        </router-link>
        <router-link class="item compact" to="/prefrence">
          <i class="icon bell"></i>
        </router-link>
        <router-link class="item compact" to="/prefrence">
          <i class="icon sign out"></i>
        </router-link>
      </slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MemuBarBase',
}
</script>

<style scoped>
.ui.secondary.pointing.menu {
  border-bottom: none;
}

#heart {
  animation-duration: 1000ms;
}

a {
  text-decoration: none;
  color: black;
}
a:hover {
  text-decoration: underline;
}
</style>
