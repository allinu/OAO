<template>
  <div class="ui container">
    <div class="main">
      <VueCtkDateTimePicker
        style="border-radius: 40px"
        v-model="date"
        :locale="locale"
        :color="color"
        :only-date="only_date"
        :input-size="input_size"
        :label="label"
        :noLabel="noLabel"
        :button-now-translation="button_now_translation"
        :id="id"
        :inline="inline"
      />
    </div>
  </div>
</template>
<script>
const moment = require('moment')

moment.locale('zh-CN')
let today = moment()

export default {
  name: 'Diary',
  data() {
    return {
      // NOTE 当前时间
      date: today,
      // NOTE date picker
      locale: 'cn',
      color: '#100000',
      only_date: false,
      noLabel: true,
      label: '请选择时间',
      input_size: '',
      button_now_translation: '现在',
      id: 'diary_date',
      inline: false,
    }
  },
  methods: {},
  mounted() {},
}
</script>

<style scoped>
* {
  font-family: 'SCR';
}
.date-time-picker span {
  font-family: 'SCR';
}
.main {
  background: rgb(219, 210, 210);
}
.main .date-time-picker {
  width: 250px;
  float: left;
}
.date-time-picker >>> #diary_date-input {
  border-radius: 50px;
  border: 2px solid #a2d3c2;
  background: #a2d3c2;
  font-family: 'SCR';
  font-size: 14px;
  font-weight: bold;
  text-align: center;
}
.date-time-picker >>> button {
  background: #a2d3c2;
}
</style>