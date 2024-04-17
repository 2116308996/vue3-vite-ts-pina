<script setup lang='ts'>
import { ref,isRef,shallowRef,onMounted } from 'vue'
import router from "@/router/index"
import view1 from "@/views/home4/2cesium/2cesium-1.vue"
import viewcode1 from "@/views/home4/2cesium/2cesium-1.vue?raw"
import view2 from "@/views/home4/2cesium/2cesium-2.vue"
import viewcode2 from "@/views/home4/2cesium/2cesium-2.vue?raw"
import view3 from "@/views/home4/2cesium/2cesium-3.vue"
import viewcode3 from "@/views/home4/2cesium/2cesium-3.vue?raw"
const data = ref({

})
onMounted(() => {

})
</script>
<template>
  <div>
    <div style="padding: 5px;">
        <text1-head :text="router.router.currentRoute.value.meta.title"></text1-head>

            <text2-head text="Cesium"></text2-head>
            
            <text-main>
                <template #a>
                    <view1></view1>
                </template>
                <template #b>
                    <view-code :code="viewcode1"></view-code>
                </template>
            </text-main>

            <text2-head text="Cesium与three"></text2-head>
            <text-main>
                <template #a>
                    <view2></view2>
                </template>
                <template #b>
                    <view-code :code="viewcode2"></view-code>
                </template>
            </text-main>

            <text2-head text="three-cesium"></text2-head>
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
<style scoped lang='less'>

</style>