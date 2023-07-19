<script setup lang='ts'>
import { ref,isRef,shallowRef,onMounted } from 'vue'
import view1 from '@/views/home/4watch/4watch-1.vue'
import viewcode1 from '@/views/home/4watch/4watch-1.vue?raw'
import router from '@/router'
onMounted(()=>{
    console.log()
})
</script>
<template>
  <div style="padding: 5px;">
    <text1-head>{{router.router.currentRoute.value.meta.title}}</text1-head>
  </div>
</template>
<style scoped lang='less'>

</style>