<script setup lang="ts">
interface router_item {
    id: number,
    display_name: string,
    float: string,
    url: string
}

const routers:Array<router_item> = [
    {
        id: 1,
        display_name: "OAO",
        float: 'left',
        url: '/'
    },
    {
        id: 2,
        display_name: "博客",
        float: 'left',
        url: 'https://notion.allinu.vercel.app/'
    },
    {
        id: 3,
        display_name: "开源项目",
        float: 'left',
        url: "/repos"
    },
    {
        id: 4,
        display_name: "工具箱",
        float: "left",
        url: '/tools'
    },
    {
        id: 5,
        display_name: "",
        float: 'right',
        url: 'https://github.com/allinu'
    }
]

</script>

<template>
    <div>
        <ul class="w-100 h-14 px-5 backdrop-blur-xl border-b-2 border-dashed">
            <li class="mt-4 hover:text-red-500 ml-10 font-bold hover:font-bold" :class="router_item.float == 'left' ? 'float-left':'float-right'" v-for="router_item in routers" :key="router_item.id">
                <a :href="router_item.url">{{router_item.display_name}}</a>
            </li>
        </ul>
    </div>
</template>

<style scoped>
li {
    font-family: 'SCR','NFR';
}

</style>