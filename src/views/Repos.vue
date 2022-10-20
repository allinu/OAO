<script lang="ts" setup>
import axios from 'axios'
import { onBeforeMount, ref, Ref } from 'vue'
interface cardInfo {
    name: string,
    description: string,
    language: string,
    avatar_url: string,
    html_url: string,
    default_branch: string,
    homepage: string,
}

let cards: Ref = ref(Array<cardInfo>)

function getCardsInfo() {
    axios.get("/api/repos_info/allinu/repos").then(function (res) {
        console.log("res", res.data);
        cards.value = res.data
    })
}
onBeforeMount(() => {
    getCardsInfo();
})
function dealLanguage(str: string) {
    if (str !== null) {
        switch (str) {
            case "Dockerfile": return "nf-linux-docker";
            case "HTML": return "nf-dev-html5";
            case "TypeScript": return "nf-mdi-language_typescript";
            case "C": return "nf-custom-c";
            case "Jupyter Notebook": return "";
            default: return "nf-dev-" + str.toLowerCase();
        }
    } else {
        return "nf-fa-heart";
    }
}
function dealClickLink(card: cardInfo) {
    if(card.homepage) {
        return card.homepage
    }else {
        return card.html_url
    }
}


</script>

<template>
    <div>
        <div
            class="w-screen pt-5 pb-5 px-5 grid sm:grid-cols-3 md:grid-cols-2 lg:grid-cols-3 dark:bg-black dark:text-gray-200">
            <a :href="dealClickLink(card)" class="m-2 duration-300 border-2 border-gray-900 dark:border-gray-300 flex-grow h-64 p-5 rounded-xl relative hover:border-red-600 hover:bg-gray-100"
                v-for="card in cards">
                <div class="card-head">
                    <h3 class="text-xl font-bold">
                        <span
                            :class="'w-10 text-center inline-block bottom-0 rounded-full text-2xl relative nf '+dealLanguage(card.language)"></span>
                        {{card.name}}
                    </h3>
                </div>
                <hr class=" my-5 border-dashed border-gray-500">
                <div class="card-body h-24 overflow-hidden overflow-ellipsis text-slate-500">
                    {{card.description}}
                </div>
                <hr class="mt-2 border-dashed border-gray-500">
                <div class="card-footer flex items-center absolute right-2 bottom-2 h-10">
                    <span class="'w-10 text-center inline-block bottom-0 rounded-full text-2xl relative nf nf-dev-git_branch"></span>
                    <span class="text-center inline-block bottom-0 rounded-full text-sm relative">{{card.default_branch}}</span>
                    <img :src="card.owner.avatar_url" alt="avatar" class="w-10 ml-2 relative bottom-1 rounded-full">
                </div>
            </a>
        </div>
    </div>

</template>

<style>

</style>