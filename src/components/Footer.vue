<template>
  <div class="container">
    <hr />
    <div class="d-flex justify-content-between bd-highlight mb-3">
      <span class="badge colorful"
        >联系我：
        <a
          href="mailto:lionacc@163.com"
          class="text-reset text-decoration-none light"
          >{{ author_mail }}</a
        >
      </span>
      <span class="badge colorful">版本：{{ version }}</span>
    </div>
  </div>
</template>
<script>
var moment = require("moment");

moment.locale("zh-cn");

export default {
  name: "Footer",
  data() {
    return {
      version: "1.0.0",
      seconds: "",
      author_mail: "lionacc@163.com",
    };
  },
  methods: {},
};
</script>
<style scoped>
.container {
  padding: 10px 10px;
}
.badge {
  font-family: "SCR";
  background: none;
  color: #f00;
}
</style>