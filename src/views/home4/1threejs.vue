<script setup lang='ts'>
import router from '@/router'
import { ref, isRef, shallowRef, onMounted } from 'vue'
import view1 from "@/views/home4/1threejs/1threejs-1.vue"
import viewcode1 from "@/views/home4/1threejs/1threejs-1.vue?raw"
import view2 from "@/views/home4/1threejs/1threejs-2.vue"
import viewcode2 from "@/views/home4/1threejs/1threejs-2.vue?raw"
import view3 from "@/views/home4/1threejs/1threejs-3.vue"
import viewcode3 from "@/views/home4/1threejs/1threejs-3.vue?raw"
import view4 from "@/views/home4/1threejs/1threejs-4.vue"
import viewcode4 from "@/views/home4/1threejs/1threejs-4.vue?raw"
import view5 from "@/views/home4/1threejs/1threejs-5.vue"
import viewcode5 from "@/views/home4/1threejs/1threejs-5.vue?raw"
import view6 from "@/views/home4/1threejs/1threejs-6.vue"
import viewcode6 from "@/views/home4/1threejs/1threejs-6.vue?raw"
const data = ref({

})
onMounted(() => {

})
</script>
<template>
    <div>
        <div style="padding: 5px;">
            <text1-head :text="router.router.currentRoute.value.meta.title"></text1-head>

            <text2-head text="Threejs"></text2-head>
            <div>
                <span>轨道控制器与坐标辅助器</span>
            </div>
            <div>
                <span>物体位移与父子元素</span>
            </div>
            <div>
                <span>物体的旋转缩放</span>
            </div>
            <div>
                <span>响应式画布与全屏</span>
            </div>
            <text-main>
                <template #a>
                    <view1></view1>
                </template>
                <template #b>
                    <view-code :code="viewcode1"></view-code>
                </template>
            </text-main>

            <text2-head text="lil-gui"></text2-head>
            <div>
                <span>应用lil-gui</span>
            </div>
            <text-main>
                <template #a>
                    <view2></view2>
                </template>
                <template #b>
                    <view-code :code="viewcode2"></view-code>
                </template>
            </text-main>

            <text2-head text="几何体之BufferGeometry"></text2-head>
            <div>
                <span>几何体之BufferGeometry</span>
            </div>
            <text-main>
                <template #a>
                    <view3></view3>
                </template>
                <template #b>
                    <view-code :code="viewcode3"></view-code>
                </template>
            </text-main>

            <text2-head text="贴图与背景"></text2-head>
            <div>
                <span>贴图与背景</span>
            </div>
            <text-main>
                <template #a>
                    <view4></view4>
                </template>
                <template #b>
                    <view-code :code="viewcode4"></view-code>
                </template>
            </text-main>

            <text2-head text="加载gltf模型"></text2-head>
            <div>
                <span>加载gltf模型</span>
            </div>
            <text-main>
                <template #a>
                    <view5></view5>
                </template>
                <template #b>
                    <view-code :code="viewcode5"></view-code>
                </template>
            </text-main>

            <text2-head text="光线投射"></text2-head>
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