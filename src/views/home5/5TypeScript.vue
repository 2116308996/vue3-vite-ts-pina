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
import view4 from './5TypeScript/5TypeScript-4.vue'
import viewcode4 from './5TypeScript/5TypeScript-4.vue?raw';
import view5 from './5TypeScript/5TypeScript-5.vue'
import viewcode5 from './5TypeScript/5TypeScript-5.vue?raw';
import view6 from './5TypeScript/5TypeScript-6.vue'
import viewcode6 from './5TypeScript/5TypeScript-6.vue?raw';
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

            <text2-head text="Class和抽象类"></text2-head>
            <div>
            </div>
            <text-main>
                <template #a>
                    <view4></view4>
                </template>
                <template #b>
                    <view-code :code="viewcode4"></view-code>
                </template>
            </text-main>

            <text2-head text="元组类型和枚举类型"></text2-head>
            <div>
            </div>
            <text-main>
                <template #a>
                    <view5></view5>
                </template>
                <template #b>
                    <view-code :code="viewcode5"></view-code>
                </template>
            </text-main>

            <text2-head text="类型推论和类型别名"></text2-head>
            <div>
            </div>
            <text-main>
                <template #a>
                    <view6></view6>
                </template>
                <template #b>
                    <view-code :code="viewcode6"></view-code>
                </template>
            </text-main>
        </div>
    </div>
</template>
<style scoped lang='less'></style>