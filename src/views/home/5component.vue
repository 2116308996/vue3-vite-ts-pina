<script setup lang='ts'>
import {ref,reactive} from 'vue'
import router from '@/router'
import view1 from '@/views/home/5component/5component-1.vue'
import viewcode1 from '@/views/home/5component/5component-1.vue?raw'
import viewcode2 from '@/views/home/5component/5component-2.vue?raw'
import tree1 from '@/views/home/5component/tree-1.vue'
import treecode1 from '@/views/home/5component/tree-1.vue?raw'
import treecode2 from '@/views/home/5component/tree-2.vue?raw'
import view3 from '@/views/home/5component/5component-3.vue'
import viewcode3 from '@/views/home/5component/5component-3.vue?raw'
import view4 from '@/views/home/5component/5component-4.vue'
import viewcode4 from '@/views/home/5component/5component-4.vue?raw'
import viewcode5 from '@/views/home/5component/5component-5.vue?raw'
</script>
<template>
  <div style="padding: 5px;">
    <text1-head>{{ router.router.currentRoute.value.meta.title }}</text1-head>
    <text2-head>父子组件通信</text2-head>
    <text-main>
        <template v-slot:a>
           <view1></view1>
        </template>
        <template v-slot:b>
            <p>父组件</p>
            <view-code :code="viewcode1"></view-code>
            <p>子组件</p>
            <view-code :code="viewcode2"></view-code>
        </template>
    </text-main>
    
    <text2-head>递归组件</text2-head>
    <text-main>
      <template v-slot:a>
        <tree1></tree1>
      </template>
      <template v-slot:b>
        父组件tree-1.vue
        <view-code :code="treecode1"></view-code>
        子组件tree-2.vue
        <view-code :code="treecode2"></view-code>
      </template>
    </text-main>

    <text2-head>动态组件</text2-head>
    <text-main>
      <template v-slot:a>
        <view3></view3>
      </template>
      <template v-slot:b>
        <view-code :code="viewcode3"></view-code>
      </template>
    </text-main>

    <text2-head>插槽</text2-head>
    <text-main>
      <template v-slot:a>
        <view4></view4>
      </template>
      <template v-slot:b>
        父组件
        <view-code :code="viewcode4"></view-code>
        子组件
        <view-code :code="viewcode5"></view-code>
      </template>
    </text-main>
  </div>
</template>
<style scoped lang='less'>

</style>