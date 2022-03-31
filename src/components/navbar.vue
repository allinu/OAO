<template>
  <div class="sm:px-8 px-2 pt-2 dark:bg-black bg-white border-b-2 border-dashed flex">
    <nav class=" flex flex-row justify-start center -mb-px text-xs text-black font-bold text-center">
      <a v-for="item in navs" :href="item['url']" :key="item.id"
         class="sm:mr-8 sm:mr-6 mr-4 py-3 dark:text-white no-underline border-teal-500  tracking-wide justify-center items-center  text-teal-500  flex  ">
        <span class=" text-base hover:text-red-300" :class="{'text-red-500': activeNav(item) || item['logo'] }">
          {{ item["name"] }}
        </span>
      </a>
      <a href="https://github.com/allinu/OAO" class="py-2 dark:text-white absolute no-underline border-teal-500 tracking-wide items-center text-teal-500 right-8">
        <span class=" text-base hover:text-red-900">
          <i class="nf nf-oct-mark_github text-2xl "></i>
        </span>
      </a>
    </nav>
  </div>
</template>
<script lang="ts">
export default {
  name: "navbar",
  components: {},
  data() {
    return {
      navs: [
        // {
        //   name: "  ",
        //   url: "/",
        //   logo: true,
        // },
        {
          name: "首页",
          url: "/",
        },
        {
          name: "博客",
          url: "https://notion.allinu.vercel.app/",
        },
        {
          name: "项目",
          url: "/projects",
        },
        {
          name: "工具",
          url: "/tools",
        },
        {
          name: "关于",
          url: "/about",
        },
        {
          name: "",
          url: "/love",
        },
      ],
    };
  },
  methods: {
    activeNav(item) {
      if (item.url == this.$route.path) {
        return true;
      } else {
        return false;
      }
    },
  },
};
</script>
<style lang="css">
</style>