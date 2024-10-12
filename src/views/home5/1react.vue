<script setup lang='ts'>
import {useRouter} from 'vue-router'
const router=useRouter()
import { ref, isRef, shallowRef, onMounted } from 'vue'
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
                <span>轨道控制器与坐标辅助器</span>
            </div>
            <text-main>
                <template #a>
                    <view1></view1>
                </template>
                <template #b>
                    <!-- <view-code :code="viewcode1"></view-code> -->
                </template>
            </text-main>
        </div>
    </div>
</template>
<style scoped lang='less'></style>