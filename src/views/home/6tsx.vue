<script setup lang='ts'>
import { ref,isRef,shallowRef,onMounted } from 'vue'
import view1 from '@/views/home/6tsx/6tsx-1.vue'
import viewcode1 from '@/views/home/6tsx/6tsx-1.vue?raw'
import router from '@/router'
const data = ref({

})
onMounted(() => {

})
</script>
<template>
   <div style="padding: 5px;">
    <text1-head  :text="router.router.currentRoute.value.meta.title"></text1-head>

    <text2-head text="安装"></text2-head>
    <span>npm install @vitejs/plugin-vue-jsx -D</span>
    <text-main>
        <template #a>
            <view1></view1>
        </template>
        <template #b>
            <view-code :code="viewcode1"></view-code>
        </template>
    </text-main>

    <text2-head text="自动引入插件"></text2-head>
    <span>npm i -D unplugin-auto-import</span>
    </div>
</template>
<style scoped lang='less'>

</style>