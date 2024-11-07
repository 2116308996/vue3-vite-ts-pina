<script setup lang='ts'>
import { useRouter } from 'vue-router'
const router = useRouter()
import { ref, onMounted } from 'vue'
import view1 from './5TypeScript/5TypeScript-1.vue'
import viewcode1 from './5TypeScript/5TypeScript-1.vue?raw';
import view2 from './5TypeScript/5TypeScript-2.vue'
import viewcode2 from './5TypeScript/5TypeScript-2.vue?raw';
import view3 from './5TypeScript/5TypeScript-3.vue'
import viewcode3 from './5TypeScript/5TypeScript-3.vue?raw';
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
                <p>基础类型，任意类型，接口和对象类型，数组类型，函数类型</p>
            </div>
            <text-main>
                <template #a>
                    <view1></view1>
                </template>
                <template #b>
                    <view-code :code="viewcode1"></view-code>
                </template>
            </text-main>

            <text2-head text="联合类型|类型断言|交叉类型"></text2-head>
            <div>
            </div>
            <text-main>
                <template #a>
                    <view2></view2>
                </template>
                <template #b>
                    <view-code :code="viewcode2"></view-code>
                </template>
            </text-main>

            <text2-head text="内置对象&代码雨"></text2-head>
            <div>
            </div>
            <text-main>
                <template #a>
                    <view3></view3>
                </template>
                <template #b>
                    <view-code :code="viewcode3"></view-code>
                </template>
            </text-main>
        </div>
    </div>
</template>
<style scoped lang='less'></style>