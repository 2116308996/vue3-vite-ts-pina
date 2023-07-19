<template>
    <div v-text='data.a'>
    </div>
    <div v-html='data.b'>
    </div>
</template>
<script setup lang="ts">
import { onMounted, ref } from 'vue';
const data = ref({
    a: 'click',//dbclcik
    b: '<a style="color: red; font-size: 40px">ccc</a>',
})
</script>