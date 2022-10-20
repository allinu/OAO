<script lang="ts" setup>

const contents = [
        {
          id: 1,
          title: " 打字？",
          url: "https://type.allinu.vercel.app/",
          description: "一边打字，一边背单词",
        },{
          id: 2,
          title: " 段落重写",
          url: "/tools/rewrite",
          description: "翻译、翻译、翻...",
        }
      ]

</script>

<template>
    <div class="w-screen h-screen sm:grid-cols-3 md:grid-cols-2 lg:grid-cols-3 sm:grid sm:px-10 pt-4 pb-10">
        <div v-for="item in contents" :key="item.id"  class="relative border-green-900 border-2 h-56 rounded-lg duration-300 text-green-800s p-5 hover:border-red-500 m-2">
            <h2 class="font-medium text-xl">
                <a :href="item.url" class="items-center justify-center card_title">
                   {{item.title}}
                </a>
            </h2>
            <hr class="my-5 border-2 border-green-500">
            <p class="m-2">
                {{item.description}}
            </p>
            <div class="absolute bottom-5 right-5 sm:w-32 h-10 rounded-full bg-green-500">
                <a :href="item.url" class=" w-32 h-10 flex justify-center items-center font-bold">立即使用</a>
            </div>
        </div>
    </div>
</template>

<style scoped>
</style>