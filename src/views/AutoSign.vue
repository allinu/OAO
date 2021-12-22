<template>
    <div class="flex w-screen h-screen">
        <div class="bg-blue-900 h-full w-2/7 p-5 ">
            <h2 class="text-2xl text-center font-bold my-10 text-white">今日校园签到</h2>
            <form action="/api/task" method="post">
                <div v-for="item in items" key="item.id" class=" mt-5 text-white">
                    <label :for="item.id" class=" font-bold  text-white">{{item.title}}</label>
                    <input class="w-full h-8 rounded-md text-center my-2 border-2 text-black" :type="item.type" v-model="item.d_value">
                    <p class=" text-gray-300" v-html="item.description"></p>
                </div>
            </form>
        </div>
        <div class="w-full bg-gray-900 h-full">
            <img src="../assets/iloli.gif" alt="iloli" class="mx-auto mt-52">
        </div>
    </div>
</template>
<script>
export default {
    name: "AutoSign",
    data() {
        return {
            post_data: {
                username:"",
                password:"",
                school_id:"",
                alias:"",
                signedDataMouth:"",
                location:"",
            },
            items: [
                {
                    id: "input_1",
                    title: "用户名",
                    d_value: "",
                    description: "登录今日校园APP的用户名",
                    type: "text",
                },
                {
                    id: "input_2",
                    title: "密码",
                    d_value: "",
                    description: "登录今日校园APP的密码",
                    type: "password",
                },
                {
                    id: "input_3",
                    title: "学校ID",
                    d_value: "",
                    description: '你需要上报信息的学校ID,点击<a class="text-red-400 font-bold underline" href="https://getid.liona.fun/" target="_blank" rel="noopener noreferrer">这里</a>获取',
                    type: "text",
                },
                {
                    id: "input_4",
                    title: "昵称",
                    d_value: "",
                    description: "保存在数据库中的昵称",
                    type: "text",
                },
                {
                    id: "input_5",
                    title: "历史签到",
                    d_value: "",
                    description:"程序可以读取历史签到数据，但是需要指定年份和月份",
                    type: "date",
                },
                {
                    id: "input_6",
                    title: "GPS 地址",
                    d_value: "",
                    description: '你的定位信息，可以<a class="text-red-400 font-bold underline" href="https://api.map.baidu.com/lbsapi/getpoint/index.html" target="_blank" rel="noopener noreferrer">这里</a>通过获取',
                    type: "text",
                },

            ],
        }
    },
    computed: {
        post_data() {
            return this.items.map(item => {
                return {
                    id: item.id,
                    d_value: item.d_value,
                }
            })
        }
    },
}
</script>
<style lang="css" scoped>
</style>