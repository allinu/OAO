<template>
    <div class="w-screen h-screen sm:grid-cols-4 md:grid-cols-2 lg:grid-cols-4 sm:grid gap-4 sm:px-10 pt-20 pb-10">
        <div v-for="item in contents" :key="item.id"  class="relative border-green-900 border-2 h-56 rounded-lg duration-300 text-green-800s p-5 hover:bg-gray-900 hover:text-white m-2">
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
<script lang="ts">
export default {
  name: "Automation",
  data() {
    return {
      contents: [
        {
          id: 1,
          title: " 签到/查寝",
          url: "/tools/sign",
          description: "今日校园的签到/查寝任务自动完成",
        },
        {
          id: 2,
          title: " 打字？",
          url: "https://type.liona.fun/",
          description: "一边打字，一边背单词",
        }
      ],
    };
  },
};
</script>
<style lang="css" scoped>
.card_title{
  font-size: 1em;
  line-height: 1em;
}
</style>