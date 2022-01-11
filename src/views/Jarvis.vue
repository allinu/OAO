<template>
    <div class="pt-20 p-5 w-screen h-screen">
        <vue-calendar></vue-calendar>
    </div>
</template>
<script>
import Calendar from "@/components/calendar.vue";

export default {
    name: 'Jarvis',
    components: {
        'vue-calendar': Calendar,
    },
}
</script>
<style lang="css" scoped>
    
</style>