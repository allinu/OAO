<template>
  <div class="ui secondary big menu">
    <div class="item">
      <!-- NOTE 左边的logo -->
      <slot name="logo">
        <font-awesome-icon icon="circle-notch"></font-awesome-icon>
        <font-awesome-icon icon="heart" id="heart" color="red" class="looping animating transition pulse">
        </font-awesome-icon>
        <font-awesome-icon icon="circle-notch"></font-awesome-icon>
      </slot>
    </div>
    <router-link class="section item" to="/">主 页</router-link>
    <router-link class="item" to="/">联系人</router-link>
    <router-link class="item" to="/">日 记</router-link>
    <div class="right menu">
      <!-- NOTE 右边的菜单 -->
      <slot name="right_menu">
        <div class="item">
          <div class="ui icon input">
            <input type="text" class="input" placeholder="搜索联系人">
            <i class="icon search"></i>
          </div>
        </div>
        <router-link class="item compact" to="/prefrence">
          <i class="icon setting"></i>
        </router-link>
        <router-link class="item compact" to="/prefrence">
          <i class="icon bell"></i>
          <div class="float ui red label ">2</div>
        </router-link>
        <router-link class="item compact" to="/prefrence">
          <i class="icon sign out"></i>
        </router-link>
      </slot>
      <!-- <router-link class="section item" to="/registr">
        注 册
      </router-link>
      <router-link class="item" to="/login">
        登 录
      </router-link> -->
    </div>
  </div>
</template>

<script>
  export default {
    name: "MemuBarBase",
  };
</script>

<style scoped>
  #heart {
    animation-duration: 1000ms;
  }
</style>