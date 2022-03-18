<template>
    <div class="w-screen h-screen sm:grid-cols-2 md:grid-cols-1 lg:grid-cols-2 gap-4 sm:grid sm:px-10 pt-20 pb-10">
        <div>
            <h2 class="text-center text-2xl text-green-900">原始段落</h2>
            <textarea class=" h-5/6 w-full hover:border-red-800 p-2 border-2 rounded-xl" name="origin" id="origin" v-model="origin" placeholder="原始段落放这里。。"></textarea>
            <button type="button" class="w-full h-10 border-2 rounded-xl hover:bg-green-900 hover:text-white hover:border-green-900 border-green-600" @click="getRewriteText">开始重写</button>
        </div>
        <div>
            <h2 class="text-center text-2xl text-green-900">重写结果</h2>
            <textarea class="h-5/6 w-full hover:border-red-800 p-2 border-2 rounded-xl" readonly name="origin" id="origin" v-model="rewrite" placeholder="重写结果在这里。。"></textarea>
        </div>
    </div>
</template>
<script lang="ts">
import axios from "axios";

export default {
    name: "ReWrite",
    data() {
        return {
            origin: "",
            rewrite: ""
        }
    },
    methods: {
        getRewriteText(){
            axios.post("/api/rewrite", {
                origin_text: this.origin
            }).then(res => {
                // console.log(res.data);
                this.rewrite = res.data.rewrite_text;
            }).catch(err => {
                console.log(err);
            })
        }
    },
}
</script>
<style lang="css">
    
</style>