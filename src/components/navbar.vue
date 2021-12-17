<template>
  <div class="sm:px-8 px-2 pt-2 bg-white border-b-2 border-dashed">
    <nav class=" flex flex-row justify-start center -mb-px text-xs text-black font-bold text-center">
      <a v-for="item in navs" :href="item['url']" :key="item.id"
         class="  sm:mr-8 mr-6 py-3  no-underline border-teal-500  tracking-wide justify-center items-center  text-teal-500  flex  ">
        <i class="fa fa-home fa-2x"></i> 
        <span class=" text-base hover:text-red-300" :class="{'text-red-500': activeNav(item) || item['logo'] }">
          {{ item["name"] }}
        </span>
      </a>
    </nav>
  </div>
</template>
<script>
export default {
  name: "navbar",
  components: {},
  data() {
    return {
      navs: [
        {
          name: "  ",
          url: "/",
          logo: true,
        },
        {
          name: "首页",
          url: "/",
        },
        {
          name: "博客",
          url: "https://blog.liona.fun/",
        },
        {
          name: "项目",
          url: "/projects",
        },
        {
          name: "自动化",
          url: "/automation",
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