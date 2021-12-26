<template>
    <div class="w-screen md:h-screen sm:flex flex-row">
        <div class="bg-blue-900 h-full w-full md:w-4/12 pt-10">
            <form autocomplete="off" @submit.prevent="onSubmit" class="p-5">
                <div v-for="item in items" :key="item.id" class=" mt-2 text-white">
                    <label :for="item.id" class=" font-bold  text-white">{{item.title}}</label>
                    <input class="w-full h-8 rounded-md px-2 my-2 border-2 text-black" :type="item.type" v-model="item.d_value" :placeholder="item.default">
                    <p class=" text-gray-300 text-right text-sm" v-html="item.description"></p>
                </div>
                <br>
                <button type="submit" @click="submit_data" class="w-full h-8 bg-green-400 rounded mt-2 text-white font-bold">提 交</button>
            </form>
        </div>
        <form autocomplete="off" @submit.prevent="onSubmit" class="p-10 sm:pt-20 h-full w-full bg-gray-900 text-white flex flex-col justify-center items-center">
            <label for="_username" class="p-4">
                <h1 class="text-xl">用户名</h1>
                <input type="text" id="_username"  v-model="_username" class="w-80 h-10 px-2 mt-4 rounded-md text-black">
            </label>
            <p class=" text-xl text-yellow-400 my-2" v-show="query_info">{{query_info}}</p>
            <div class="w-80 h-10 grid grid-cols-2 pt-0 gap-3">
                <button class="w-full h-10 mt-2 rounded-md bg-green-600" @click="submit_query"> 查  询 </button>
                <button class="w-full h-10 mt-2 rounded-md bg-red-600" @click="submit_delete"> 删  除 </button>
            </div>
            <img src="../assets/iloli.gif" alt="iloli" class="mx-auto mt-52 sm:absolute bottom-0 right-0 visible sm:visible">
        </form>
    </div>
</template>
<script lang="ts">
import axios from "axios";
export default {
    name: "AutoSign",
    data() {
        return {
            post_data: {
                alias:"",
                school_id:"",
                username:"",
                password:"",
                signedDataMonth:"",
                location_lon:"",
                location_lat:"",
                location_name:"",
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
                    id: "signedDataMonth",
                    title: "历史签到",
                    d_value: "",
                    description:"可以读取历史签到数据<br/>但是需要指定<strong class='underline text-red-400'>年份</strong><strong class='underline'>和</strong><strong class='underline text-red-400'>月份</strong>",
                    type: "text",
                    default: "2020-11",
                },
                {
                    id: "location_lon_lat",
                    title: "GPS 地址",
                    d_value: "",
                    description: '你的定位信息，<a class="text-red-400 font-bold underline" href="https://api.map.baidu.com/lbsapi/getpoint/index.html" target="_blank" rel="noopener noreferrer">这里</a>获取',
                    type: "text",
                    default: "116.403981,39.914603",
                },
                {
                    id: "location_name",
                    title: "详细地址名称",
                    d_value: "",
                    description: '请使用你的历史成功的签到信息显示的地址名称<br><strong class="text-red-400">可以在手机APP端查看</strong>',
                    type: "text",
                    default: "北京市海淀区上地十街10号",
                },

            ],
            _username: "",
            query_info: "",
            flag: "false",
        }
    },
    methods: {
        onSubmit(){return false;},
        submit_data() {
            this.post_data.alias = this.items[0].d_value;
            this.post_data.school_id = this.items[1].d_value;
            this.post_data.username = this.items[2].d_value;
            this.post_data.password = this.items[3].d_value;
            this.post_data.signedDataMonth = this.items[4].d_value;
            
            
            if(this.items[5].d_value.split(",").length != 2){
                this.post_data.location_lon = "";
                this.post_data.location_lat = "";
                this.post_data.location_name = "";
            }else{
                this.post_data.location_lon = this.items[5].d_value.split(",")[0];
                this.post_data.location_lat = this.items[5].d_value.split(",")[1];
            }
            if(this.post_data.signedDataMonth.split("-").length != 2){
                this.post_data.signedDataMonth = "2020-11";
            }else{
                this.post_data.location_name = this.items[6].d_value;
            }

            if(this.post_data.alias == "" || this.post_data.school_id == "" || this.post_data.username == "" || this.post_data.password == ""){
                alert("请填写完整信息");
            }
            else {
                axios.post("/api/tasks", this.post_data).then(res => {
                    console.log(res);
                    alert(res.data.info);
                }).catch(err => {
                    alert("网络错误");
                    console.log(err);
                })
            }
            console.log(this.post_data);
        },
        submit_query(){
            if(this._username.length < 1){
                alert("请输入用户名");
                return;
            }
            else{
                axios.get("/api/tasks/" + this._username).then(res => {
                    console.log(res);
                    this.query_info = res.data.info;
                    if(res.data.code == '0'){
                        this.flag = "true";
                    }
                    else{
                        this.flag = "false";
                    }
                })
            }
        },
        submit_delete(){
            if(this._username.length < 1){
                alert("请输入用户名");
                return;
            }
            else{
                this.submit_query();
                if(this.flag == "true"){
                    axios.delete("/api/tasks/" + this._username).then(res => {
                        console.log(res);
                        this.query_info = this._username + res.data.info;
                    })
                }
                else{
                    alert("用户不存在");
                }
            }
        },
        get_data(){
        }
    },
}

</script>
<style lang="css" scoped>
</style>