<template>
  <div class="footer">
    <div class="ui horizontal divider">
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
    </div>
    <div class="ui aligned equal width grid">
      <div class="column left floated">
        <div class="ui label">
          联系我们：
          <a href="mailto:lionacc@163.com">
            <i class="mail icon"></i>
            lionacc@163.com
          </a>
        </div>
      </div>
      <div class="column center aligned"></div>
      <div class="column right floated right aligned">
        <div class="ui label">版本：{{ version }}</div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Footer',
  data() {
    return {
      version: '1.0.0',
    }
  },
}
</script>
<style scoped>
.footer {
  font-family: 'SCR';
}
</style>