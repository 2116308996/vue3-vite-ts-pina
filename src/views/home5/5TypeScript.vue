<script setup lang='ts'>
import { useRouter } from 'vue-router'
const router = useRouter()
import { ref, onMounted } from 'vue'
import view1 from './5TypeScript/5TypeScript-1.vue'
import viewcode1 from './5TypeScript/5TypeScript-1.vue?raw';
const data = ref({
    
})
onMounted(() => {
   
})
</script>
<template>
    <div>
        <div style="padding: 5px;">
            <text1-head :text="router.currentRoute.value.meta.title"></text1-head>
            <text2-head text="数据类型"></text2-head>
            <div>
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