<template>
  <div class="container-fuild">
    <vue-baberrage
      :isShow="barrageIsShow"
      :barrageList="barrageList"
      :throttleGap="throttleGap"
      :lanesCount="lanesCount"
      :messageHeight="messageHeight"
    >
      <template v-slot:default="slotProps">
        <span
          class="ui label large circular"
          :class="slotProps.item.color"
          style="color: rgba(0, 0, 0, 0.4); font-family: 'NFM', 'SCM'"
        >
          {{ slotProps.item.msg }}
        </span>
      </template>
    </vue-baberrage>

    <div class="main">
      <CustomLogo class="logo" />
      <h6>{{ main_msg }}</h6>
    </div>
  </div>
</template>

<script>
import CustomLogo from "@/components/CustomLogo";
import { MESSAGE_TYPE } from "vue-baberrage";
const moment = require("moment");
const axios = require("axios");

moment.locale("zh-cn");
let start_time = moment("20201105");
var now_time = moment();

// let url = 'https://v1.hitokoto.cn/?c=j&c=h&c=e&c=d&c=i'
let url =
  "https://api.lovelive.tools/api/SweetNothings/15/Serialization/Json?genderType=M";

export default {
  name: "Home",
  components: {
    CustomLogo,
  },
  data() {
    return {
      start_time,
      now_time,
      words: "",
      msg: "",
      main_msg: "",
      days: now_time.diff(start_time, "days"),
      throttleGap: 4000,
      lanesCount: 15,
      messageHeight: 35,
      barrageIsShow: true,
      currentId: 0,
      barrageLoop: true,
      // TODO 这里的弹幕内容应该为日记内容摘选
      barrageList: [],
      // NOTE 为变换颜色创建的数组
      colorList: [
        "red",
        "orange",
        "yellow",
        "olive",
        "green",
        "teal",
        "blue",
        "violet",
        "purple",
        "pink",
      ],
    };
  },
  methods: {
    addToList() {
      axios.get(url).then((response) => {
        for (let index = 0; index < 15; index++) {
          this.barrageList.push({
            id: ++this.currentId,
            // msg: response.data['hitokoto'],
            msg: response.data["returnObj"][index],
            time: Math.random() * 10 + 5,
            // NOTE 这里可以实现变化颜色
            // color: this.colorList[index % 10],
            color: "",
            type: MESSAGE_TYPE.NORMAL,
            // username: response.data['from_who']
            //   ? response.data['from_who']
            //   : 'Hitokoto',
          });
        }
      });
    },
  },
  mounted() {
    let that = this;
    that.addToList();
    setInterval(function () {
      that.addToList();
    }, 10000);
  },
};
</script>

<style scoped>
.main {
  padding-top: 150px;
  padding-bottom: 120px;
  text-align: center;
  text-align: center;
  position: relative;
  height: 650px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, 0%);
}
.main > h1 {
  margin-top: 50px;
  font-family: "NFM", "SCR";
}
.baberrage-stage {
  padding-top: 10px;
  height: 650px;
}
.logo {
  font-size: 120px;
}
</style>
