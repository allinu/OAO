<script setup lang="ts">
import { RouterView } from 'vue-router';
import  navbar  from '@/components/navbar/index.vue'

</script>

<template>
  <navbar class="sticky top-0 z-10"></navbar>
  <RouterView></RouterView>
</template>

<style>
* {
  font-family: "NFM", "SCM";
}
</style>