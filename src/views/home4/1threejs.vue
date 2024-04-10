<script setup lang='ts'>
import router from '@/router'
import { ref, isRef, shallowRef, onMounted } from 'vue'
import view1 from "@/views/home4/1threejs/1threejs-1.vue"
import viewcode1 from "@/views/home4/1threejs/1threejs-1.vue?raw"
const data = ref({

})
onMounted(() => {

})
</script>
<template>
    <div>
        <div style="padding: 5px;">
            <text1-head :text="router.router.currentRoute.value.meta.title"></text1-head>

            <text2-head text="v-model"></text2-head>
            <div>
                <span>npm install @vitejs/plugin-vue-jsx -D</span>
            </div>
            <div>
                <span>自动导入ref onMounted 等</span>
            </div>
            <text-main>
                <template #a>
                    <view1></view1>
                </template>
                <template #b>
                    <view-code :code="viewcode1"></view-code>
                </template>
            </text-main>
        </div>
    </div>
</template>
<style scoped lang='less'></style>