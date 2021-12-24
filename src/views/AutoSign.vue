<template>
    <div class="flex w-screen h-screen">
        <div class="bg-blue-900 h-full w-4/12 justify-center pt-10 items-center flex">
            <form action="/api/tasks" method="post">
                <div v-for="item in items" :key="item.id" class=" mt-2 text-white">
                    <label :for="item.id" class=" font-bold  text-white">{{item.title}}</label>
                    <input class="w-full h-8 rounded-md px-2 my-2 border-2 text-black" :type="item.type" v-model="item.d_value" :placeholder="item.default">
                    <p class=" text-gray-300 text-right text-sm" v-html="item.description"></p>
                </div>
                <br>
                <button type="submit" class="w-full h-8 bg-green-400 rounded mt-2 text-white font-bold">提 交</button>
            </form>
        </div>
        <div class="w-full bg-gray-900 h-full relative">
            <img src="../assets/iloli.gif" alt="iloli" class="mx-auto mt-52 absolute bottom-0 right-0">
        </div>
    </div>
</template>
<script lang="ts">
export default {
    name: "AutoSign",
    data() {
        return {
            post_data: {
                alias:"",
                school_id:"",
                username:"",
                password:"",
                signedDataMouth:"",
                location:"",
            },
            items: [
                {
                    id: "alias",
                    title: "昵称",
                    d_value: "",
                    description: "保存在数据库中的昵称",
                    type: "text",
                    default: "",
                },
                {
                    id: "school_id",
                    title: "学校 ID",
                    d_value: "",
                    description: '上报信息的学校ID,<a class="text-red-400 font-bold underline" href="https://getid.liona.fun/" target="_blank" rel="noopener noreferrer">这里</a>获取',
                    type: "text",
                    default: "",
                },
                {
                    id: "username",
                    title: "用户名",
                    d_value: "",
                    description: "登录今日校园APP的用户名",
                    type: "text",
                    default: "",
                },
                {
                    id: "password",
                    title: "密码",
                    d_value: "",
                    description: "登录今日校园APP的密码",
                    type: "password",
                    default: "",
                },
                {
                    id: "signedDataMouth",
                    title: "历史签到",
                    d_value: "",
                    description:"可以读取历史签到数据<br/>但是需要指定<strong class='underline text-red-400'>年份</strong><strong class='underline'>和</strong><strong class='underline text-red-400'>月份</strong>",
                    type: "text",
                    default: "2020-11",
                },
                {
                    id: "location",
                    title: "GPS 地址",
                    d_value: "",
                    description: '你的定位信息，<a class="text-red-400 font-bold underline" href="https://api.map.baidu.com/lbsapi/getpoint/index.html" target="_blank" rel="noopener noreferrer">这里</a>获取',
                    type: "text",
                    default: "116.403981,39.914603",
                },

            ],
        }
    },
    methods: {
        submit() {
            this.post_data.alias = this.items[0].d_value;
            this.post_data.school_id = this.items[1].d_value;
            this.post_data.username = this.items[2].d_value;
            this.post_data.password = this.items[3].d_value;
            this.post_data.signedDataMouth = this.items[4].d_value;
            this.post_data.location = this.items[5].d_value;
            this.$http.post("/api/tasks", this.post_data).then(res => {
                if (res.data.code == 0) {
                    alert("提交成功");
                } else {
                    this.$toast.error(res.data.msg);
                }
            }).catch(err => {
                alert("提交失败");
            })
        },
        get_data(){
            this.$http.get("/api/tasks").then(res => {
                if (res.data.code == 0) {
                    this.items[0].d_value = res.data.data.alias;
                    this.items[1].d_value = res.data.data.school_id;
                    this.items[5].d_value = res.data.data.location;
                } else {
                    this.$toast.error(res.data.msg);
                }
            }).catch(err => {
                this.$toast.error("获取数据失败");
            })
        }
    },
    mounted() {
        this.get_data();
    },
}

</script>
<style lang="css" scoped>
</style>