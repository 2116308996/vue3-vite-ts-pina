<script setup lang='ts'>
import router from '@/router'
import view1 from '@/views/home2/2fucntion/2function-1.vue'
import viewcode1 from '@/views/home2/2fucntion/2function-1.vue?raw'
const data = ref({

})
onMounted(() => {
  
})
</script>
<template>
  <div>
    <div style="padding: 5px;">
      <text1-head :text="router.router.currentRoute.value.meta.title"></text1-head>
      <text2-head text="全局函数和变量"></text2-head>
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