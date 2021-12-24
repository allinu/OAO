<template>
    <div class="w-screen h-screen flex flex-wrap px-10 pt-20 pb-10">
        <div v-for="item in contents" :key="item.id"  class="relative max-w-max border-green-900 border-2 sm:w-1/3 md:w-1/4 w-full h-56 rounded-lg duration-300 text-green-800s p-5 hover:bg-gray-900 hover:text-white m-2">
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
                <a :href="item.url" class=" w-32 h-10 flex justify-center items-center">立即使用</a>
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
          url: "/automation/sign",
          description: "今日校园的签到/查寝任务自动完成",
        },
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