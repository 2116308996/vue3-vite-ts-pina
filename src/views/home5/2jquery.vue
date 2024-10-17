<script setup lang='ts'>
import {useRouter} from 'vue-router'
const router=useRouter()
import { ref, isRef, shallowRef, onMounted } from 'vue'
import view1 from './2jquery/2jquery-1.vue'
import viewcode1 from './2jquery/2jquery-1.vue?raw';
const data = ref({

})
onMounted(() => {

})
</script>
<template>
    <div>
        <div style="padding: 5px;">
            <text1-head :text="router.currentRoute.value.meta.title"></text1-head>

            <text2-head text="方法"></text2-head>
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

            <text2-head text="隐藏显示"></text2-head>
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

            <text2-head text="动画"></text2-head>
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

            <text2-head text="Callback和Chaning.html"></text2-head>
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

            <text2-head text="获取"></text2-head>
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

            <text2-head text="添加删除"></text2-head>
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

            <text2-head text="遍历"></text2-head>
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
<style scoped lang='less'>

</style>