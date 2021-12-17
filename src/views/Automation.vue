<template>
    <div class=" w-screen h-screen flex flex-wrap items-center sm:px-20 md:px-10 px-0 sm:py-10 py-0">
      <h2 class="text-2xl">待处理，准备实现一些有意思的功能</h2>
        <div v-for="item in contents" :key="item.id"  class="relative border-green-900 border-2 border-dashed sm:w-1/3 md:w-1/4 w-full h-56 rounded-xl text-green-800s p-5 hover:bg-red-100 hover:border-pink-600 m-2">
            <h2 class="font-medium text-xl hover:text-red-700">
                <a :href="item.url" class="">
                   {{" "+item.title}}
                </a>
            </h2>
            <p class="m-2 text-gray-500">
                {{item.description}}
            </p>
            <div class="absolute bottom-5 right-5 sm:w-32 h-10 rounded-full bg-yellow-400">
                <a :href="item.url" class=" w-32 h-10 flex justify-center items-center text-xl ">查看更多</a>
            </div>
        </div>
        
    </div>
</template>
<script>
export default {
  name: "Automation",
  data() {
    return {
      contents: [
        // {
        //   id: 1,
        //   title: "签到/查寝",
        //   url: "/automation/sign",
        //   description: "今日校园的签到/查寝任务自动完成",
        // },
      ],
    };
  },
};
</script>
<style lang="css" scoped>
</style>