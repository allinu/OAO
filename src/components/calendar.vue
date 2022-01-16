<template>
    <div class="w-full grid grid-cols-3 bg-white p-5 rounded-xl dark:bg-black">
        <div class="col-span-1 grid grid-cols-2 grid-rows-4 gap-4 px-5">
            <div class="card col-span-2 row-span-2 bg-green-700 dark:bg-green-400 p-10 pt-20 relative rounded-xl">
                <h1 class="text-7xl bottom-5 absolute text-gray-100"> {{ hello_msg }} </h1>
                <!-- <img :src="avatar" alt="avatar" class="w-24 rounded-full"> -->
                <span class="w-24 h-24 rounded-full text-6xl text-white bg-red-500 flex justify-center items-center">A</span>
                <div class=" absolute top-10 right-32">
                    <span class="text-7xl text-red-500 absolute z-10"></span>
                    <span class="font-bold text-2xl absolute left-1 top-3 z-0 text-black bg-white px-4 pt-5 pb-1">{{ date_num }}</span>
                </div>
            </div>
            <div class="card col-span-1 row-span-1 bg-black dark:bg-gray-400 text-white rounded-xl p-5">
                <div class="text-4xl">{{ current_time }}</div>
                <div>{{ today_date }}</div>
            </div>
            <div class="card col-span-1 row-span-1 bg-yellow-400 rounded-xl p-5">
                <div class="text-4xl">{{ todo_count }}</div>
                <div>{{ todo_disc }}</div>
            </div>
            <div class="card col-span-2 row-span-1 bg-purple-400 rounded-xl p-5">
                <div class="text-7xl">{{ weather_data_icon }}</div>
                <div class="text-xl w-full h-10 text-right">{{ weather_data_text }}</div>
            </div>
        </div>
        <div class="col-span-2 p-5 pt-10">
            <table class="w-full rounded-xl p-5">
                <thead class="row-span-1 items-center pl-5">
                    <tr class="grid grid-cols-12 text-xl text-center p-5">
                        <td class="col-span-1">时间</td>
                        <td class="col-span-1">计划</td>
                        <td class="col-span-5"></td>
                        <td class="col-span-1"></td>
                        <td class="col-span-1">旗标</td>
                        <td class="col-span-2">位置</td>
                        <td class="col-span-1">编辑</td>
                    </tr>
                </thead>
                <tbody class="items-center">
                    <tr v-for="task in tasks" :key="task.id" class=" row-span-1 grid grid-cols-12 text-center hover:bg-pink-200 hover:text-black p-5 rounded-xl duration-300">
                        <td class="col-span-1 text-gray-500 h-full">{{ task.task_time }}</td>
                        <td class="col-span-1 text-gray-500 items-center text-center pl-3">
                            <!-- <img :src="task.task_img" alt="avatar" class="w-10 h-10 ring-2 rounded-full"> -->
                            <span class="w-10 h-10 rounded-full text-3xl text-white bg-red-500 flex justify-center items-center">A</span>
                        </td>
                        <td class="col-span-5 text-left px-2">
                            <div class="text-xl">
                                {{ task.task_content }}
                            </div>
                            <div class="text-sm text-gray-500">
                                {{ task.task_content_detail }}
                            </div>
                        </td>
                        <td class="col-span-1">
                            <div class="w-full rounded-full bg-yellow-300 text-black">
                                {{ task.task_tag }}
                            </div>
                        </td>
                        <td class="col-span-1 text-red-500">{{ task.task_flag }}</td>
                        <td class="col-span-2 px-2">
                            <div class="w-full rounded-full bg-green-200 text-black">
                                {{ task.task_location }}
                            </div>
                        </td>
                        <td class="col-span-1">
                            <div class="w-full rounded-full cursor-pointer text-xl">
                                {{ task.task_edit }}
                            </div>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>
<script lang="ts">
import axios from "axios"

export default {
    name: 'Calendar',
    data() {
        return {
            // avatar: "src/assets/avatar.jpg",
            hello_msg: "早上好！",
            date_num: "01",
            current_time: " 21:10",
            today_date: "01月02日 星期日",
            todo_count: "﫠 10",
            todo_disc: "今日有 10 项待办",
            weather_data_icon: "",
            weather_data_text: "",
            tasks: [
                {
                    task_time: "11:00",
                    task_content: "测试程序",
                    task_content_detail: "记得测试程序奥",
                    // task_img: "src/assets/avatar.jpg",
                    task_tag: "闹钟",
                    task_flag: "",
                    task_location: "办公室",
                    task_edit: "",
                },
                {
                    task_time: "11:00",
                    task_content: "测试程序",
                    task_content_detail: "记得测试程序奥",
                    // task_img: "src/assets/avatar.jpg",
                    task_tag: "闹钟",
                    task_flag: "",
                    task_location: "办公室",
                    task_edit: "",
                },
                {
                    task_time: "11:00",
                    task_content: "测试程序",
                    task_content_detail: "记得测试程序奥",
                    // task_img: "src/assets/avatar.jpg",
                    task_tag: "闹钟",
                    task_flag: "",
                    task_location: "办公室",
                    task_edit: "",
                },
                {
                    task_time: "11:00",
                    task_content: "测试程序",
                    task_content_detail: "记得测试程序奥",
                    // task_img: "src/assets/avatar.jpg",
                    task_tag: "闹钟",
                    task_flag: "",
                    task_location: "办公室",
                    task_edit: "",
                },
                {
                    task_time: "11:00",
                    task_content: "测试程序",
                    task_content_detail: "记得测试程序奥",
                    // task_img: "src/assets/avatar.jpg",
                    task_tag: "闹钟",
                    task_flag: "",
                    task_location: "办公室",
                    task_edit: "",
                },
                {
                    task_time: "11:00",
                    task_content: "测试程序",
                    task_content_detail: "记得测试程序奥",
                    // task_img: "src/assets/avatar.jpg",
                    task_tag: "闹钟",
                    task_flag: "",
                    task_location: "办公室",
                    task_edit: "",
                },
            ]
        }
    },
    mounted() {
        let api_url1 = "http://wttr.in/?format=%c"
        let api_url2 = "http://wttr.in/?format=%C+%f"
        axios.get(api_url1).then((res) => {
            console.log(res.data);
            this.weather_data_icon = res.data
        })
        axios.get(api_url2).then((res) => {
            console.log(res.data);
            this.weather_data_text = res.data
        })
    },
}
</script>
<style lang="css" scoped>
</style>