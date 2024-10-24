<script setup lang='ts'>
import { useRouter } from 'vue-router'
const router = useRouter()
import { ref, onMounted } from 'vue'
import view1 from './4unocss/4unocss-1.vue'
import viewcode1 from './4unocss/4unocss-1.vue?raw';
import view2 from './4unocss/4unocss-2.vue'
import viewcode2 from './4unocss/4unocss-2.vue?raw';
const data = ref({

})
onMounted(() => {

})
</script>
<template>
    <div>
        <div style="padding: 5px;">
            <text1-head :text="router.currentRoute.value.meta.title"></text1-head>

            <text2-head text="unocss"></text2-head>
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

            <text2-head text="tailwindcss"></text2-head>
            <p>配置好预设后，可以直接使用tailwindcss的预设</p>
            <a href="https://www.tailwindcss.cn/docs/width" target="_blank">tailwindcss库</a>
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

        </div>
    </div>
</template>
<style scoped lang='less'></style>