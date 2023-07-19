<script setup lang='ts'>
import router from '@/router'
import view1 from '@/views/home/3computeds/3computeds-1.vue'
import view2 from '@/views/home/3computeds/3computeds-2.vue'
import viewcode1 from '@/views/home/3computeds/3computeds-1.vue?raw'
import viewcode2 from '@/views/home/3computeds/3computeds-2.vue?raw'

</script>
<template>
  <div style="padding:5px">
    <text1-head>{{router.router.currentRoute.value.meta.title}}</text1-head>
    <text2-head>基础用法</text2-head>
    <text-main>
      <template v-slot:a>
        <view1></view1>
      </template>
      <template v-slot:b>
        <view-code :code="viewcode1"></view-code>
      </template>
    </text-main>

    <text2-head>案例</text2-head>
    <text-main>
      <template v-slot:a>
        <view2></view2>
      </template>
      <template v-slot:b>
        <view-code :code="viewcode2"></view-code>
      </template>
    </text-main>
  </div>
</template>
<style scoped lang='less'></style>