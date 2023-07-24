<script setup lang='ts'>
import router from '@/router'
import viewcode1 from '@/views/home/1hello/1hello-1.vue?raw'
import viewcode2 from '@/views/home/1hello/1hello-2.vue?raw'
import view1 from '@/views/home/1hello/1hello-1.vue'
import view2 from '@/views/home/1hello/1hello-2.vue'
</script>
<template>
  <div style="padding: 5px;">
    <text1-head  :text="router.router.currentRoute.value.meta.title"></text1-head>
    <text2-head  text="创建项目"></text2-head>
    <div class="title">
      <p>vue3创建项目 vue creat projectname</p>
      <p>vue3创建vite项目 npm init vite@latest</p>
    </div>

    <text2-head  text="v-text&v-title"></text2-head>
    <text-main>
      <template v-slot:a>
        <view1></view1>
      </template>
      <template v-slot:b>
        <view-code :code="viewcode1"></view-code>
      </template>
    </text-main>

    <text2-head  text="v-once&v-memo"></text2-head>
    <text-main>
      <template v-slot:a>
        <view2></view2>
      </template>
      <template v-slot:b>
        <view-code :code="viewcode2"></view-code>
      </template>
    </text-main>
    
    <text2-head  text="生命周期"></text2-head>
    <a href="https://blog.csdn.net/m0_57341617/article/details/126426931" target="_blank">https://blog.csdn.net/m0_57341617/article/details/126426931</a>
  </div>
</template>
<style scoped lang="less">
.title {
  border: 1px solid #dcdfe6;
  border-radius: 5px;
  padding: 5px;
}
</style>
