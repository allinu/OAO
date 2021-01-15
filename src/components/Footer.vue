<template>
  <div class="ui footer container">
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
      <div class="column center aligned">
        <div class="ui label primary">我们在一起 {{ seconds }} 秒了</div>
      </div>
      <div class="column right floated right aligned">
        <div class="ui label">版本：{{ version }}</div>
      </div>
    </div>
  </div>
</template>
<script>
var moment = require('moment')

moment.locale('zh-cn')

export default {
  name: 'Footer',
  data() {
    return {
      version: '1.0.0',
      seconds: '',
    }
  },
  methods: {
    flash_time() {
      let start_time = moment('20201105')
      var now_time = moment()
      this.seconds = now_time.diff(start_time, 'seconds')
    },
  },
  mounted() {
    let that = this
    that.flash_time()
    setInterval(function () {
      that.flash_time()
    }, 1000)
  },
}
</script>
<style scoped>
.footer {
  font-family: 'SCR';
  padding-top: 30px;
}
#heart {
  animation-duration: 1000ms;
}
</style>