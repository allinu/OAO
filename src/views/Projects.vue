<template>
    <div class="w-screen pt-16 pb-5 px-5 grid sm:grid-cols-4 md:grid-cols-2 lg:grid-cols-4 dark:bg-black dark:text-gray-400 ">
        <a v-for="project in projects" :href="project.html_url" target="_blank" :key="project.id" class="m-2 duration-300 border-2 border-gray-900 dark:border-gray-300 flex-grow h-64 p-5 rounded-xl relative hover:bg-gray-700 hover:text-white">
            <h2 class="text-xl font-bold">{{project.name}}</h2>
            <hr class="border-2 border-green-600 my-4">
            <p class="mt-5 nb-5">{{ clip(project.description) }}</p>
            <div class="footer flex items-center absolute right-2 bottom-2 h-10">
                <span :class="'mr-2 bottom-0 text-sm relative nf nf-dev-'+lower(project.language)"></span>
                <img :src="project.owner.avatar_url" alt="avatar" class="w-10 relative bottom-1 rounded-full">
            </div>
        </a>
    </div>
</template>
<script lang="ts">
import axios from "axios";
export default {
  name: "Projects",
  data() {
    return {
      projects: [],
    };
  },
  methods: {
    get_info() {
      axios.get("https://api.github.com/users/allinu/repos").then((res) => {
        // console.log(res.data);
        this.projects = res.data;
      });
    },
    clip(str) {
      if (str !== null && str.length > 30) {
        return str.slice(0, 100) + "...";
      } else {
        return str;
      }
    },
    lower(str) {
      if (str !== null) {
        return str.toLowerCase();
      } else {
        return "";
      }
    },
  },
  mounted() {
    this.get_info();
  },
};
</script>
<style lang="css">
p {
  word-wrap: break-word;
}
.nf {
  font-size: 25px;
}
</style>