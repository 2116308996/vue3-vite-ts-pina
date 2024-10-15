<script setup lang='ts'>
import {useRouter} from 'vue-router'
const router=useRouter()
import { ref, isRef, shallowRef, onMounted } from 'vue'
import view1 from './1react/1react-1.vue'
import viewcode1 from './1react/1react-1.vue?raw';
import viewcode2 from './1react/1react-2.tsx?raw';
const data = ref({

})
onMounted(() => {

})
</script>
<template>
    <div>
        <div style="padding: 5px;">
            <text1-head :text="router.currentRoute.value.meta.title"></text1-head>

            <text2-head text="React"></text2-head>
            <div>
                <span v-pre>1.插值语句 jsx tsx 使用{}, vue3中使用{{  }}</span>
            </div>
            <text-main>
                <template #a>
                    <view1></view1>
                </template>
                <template #b>
                    父组件
                    <view-code :code="viewcode1"></view-code>
                    子组件
                    <view-code :code="viewcode2"></view-code>
                </template>
            </text-main>
        </div>
    </div>
</template>
<style scoped lang='less'></style>