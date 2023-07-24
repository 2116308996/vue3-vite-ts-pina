<script setup lang='ts'>
import { defineAsyncComponent } from 'vue'
import Skeleton from './Skeleton.vue';
const Sync=defineAsyncComponent(()=>import('@/views/home/5component/SyncVue.vue'))
</script>
<template>
  <Suspense>
    <template #default>
         <Sync></Sync>
    </template>
    <template #fallback>
        <Skeleton></Skeleton>
    </template>
  </Suspense>
</template>
<style scoped lang='less'>
  
</style>