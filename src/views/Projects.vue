<template>
    <div class="w-screen sm:p-10 flex flex-wrap">
        <div v-for="project in projects" :key="project.id" class="m-2 border-2 border-dashed flex-grow w-64 h-64 p-5 rounded-xl relative hover:bg-red-50 hover:border-red-600">
            <a :href="project.html_url" target="_blank" class=" text-blue-700 text-xl ">{{project.name}}</a>
            <p class="mt-5 nb-5">{{ clip(project.description) }}</p>
            <div class="footer flex items-center absolute right-2 bottom-2 h-10">
                <span :class="'text-red-700 mr-2 bottom-0 text-sm relative nf nf-dev-'+lower(project.language)"></span>
                <img :src="project.owner.avatar_url" alt="avatar" class="w-10 relative bottom-1 rounded-full">
            </div>
        </div>
    </div>
</template>
<script>
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