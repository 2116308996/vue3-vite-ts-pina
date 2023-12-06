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
import view6 from '@/views/home/5component/5component-6.vue'
import viewcode6 from '@/views/home/5component/5component-6.vue?raw'
import Skeleton from '@/views/home/5component/Skeleton.vue?raw';
import SyncVue from '@/views/home/5component/SyncVue.vue?raw';
import view7 from '@/views/home/5component/5component-7.vue'
import viewcode7 from '@/views/home/5component/5component-7.vue?raw'
import view8 from '@/views/home/5component/5component-8.vue'
import viewcode8 from '@/views/home/5component/5component-8.vue?raw'
import view9 from '@/views/home/5component/5component-9.vue'
import viewcode9 from '@/views/home/5component/5component-9.vue?raw'
import view10 from '@/views/home/5component/5component-10.vue'
import viewcode10 from '@/views/home/5component/5component-10.vue?raw'
import view11 from '@/views/home/5component/5component-11.vue'
import viewcode11 from '@/views/home/5component/5component-11.vue?raw'
import view12 from '@/views/home/5component/5component-12.vue'
import viewcode12 from '@/views/home/5component/5component-12.vue?raw'
import viewcode12a from '@/views/home/5component/5component-12-1.vue?raw'
import viewcode12b from '@/views/home/5component/5component-12-2.vue?raw'
import view13 from '@/views/home/5component/5component-13.vue'
import viewcode13 from '@/views/home/5component/5component-13.vue?raw'
import viewcode13a from '@/views/home/5component/5component-13-1.vue?raw'
import viewcode13b from '@/views/home/5component/5component-13-2.vue?raw'
import view14 from '@/views/home/5component/5component-14.vue'
import viewcode14 from '@/views/home/5component/5component-14.vue?raw'
</script>
<template>
  <div style="padding: 5px;" id="headbox">
    <text1-head :text="router.router.currentRoute.value.meta.title"></text1-head>
    <text2-head text="父子组件通信"></text2-head>
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
    
    <text2-head text="递归组件"></text2-head>
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

    <text2-head text="动态组件"></text2-head>
    <text-main>
      <template v-slot:a>
        <view3></view3>
      </template>
      <template v-slot:b>
        <view-code :code="viewcode3"></view-code>
      </template>
    </text-main>

    <text2-head text="插槽"></text2-head>
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

    <text2-head text="异步组件"></text2-head>
    <text-main>
      <template #a>
         <view6></view6>
      </template>
      <template #b>
        父组件
        <view-code :code="viewcode6"></view-code>
        子组件Skeleton.vue
        <view-code :code="Skeleton"></view-code>
        子组件SyncVue.vue
        <view-code :code="SyncVue"></view-code>
      </template>
    </text-main>

    <text2-head text="传送组件"></text2-head>
    <text-main>
      <template #a>
        <view7></view7>
      </template>
      <template #b>
        父组件
        <view-code :code="viewcode7"></view-code>
        子组件
        <view-code :code="viewcode6"></view-code>
      </template>
    </text-main>

    <text2-head text="缓存组件"></text2-head>
    <div><a href="https://blog.csdn.net/weixin_44685906/article/details/124547681" style="color: rgb(62, 175, 124);" target="_blank">v-show,v-if,keep-alive的区别</a></div>
    <div><a href="https://blog.csdn.net/m0_45070460/article/details/107432685" style="color: rgb(62, 175, 124);" target="_blank">keep-alive详解</a></div>
    <div>使用keep-alive会新增onActivated与onDeactivated两个生命周期</div>
    <text-main>
      <template #a>
        <view8></view8>
      </template>
      <template #b>
        <view-code :code="viewcode8"></view-code>
      </template>
    </text-main>

    <text2-head text="transition动画组件"></text2-head>
    <div><a href="https://blog.csdn.net/Lyrelion/article/details/125852648" style="color: rgb(62, 175, 124);" target="_blank">Transition生命周期</a></div>
    <div><a href="https://blog.csdn.net/qq_37209594/article/details/124124721" style="color: rgb(62, 175, 124);" target="_blank">gasp的使用</a></div>
    <text-main>
      <template #a>
        <view9></view9>
        <view10></view10>
      </template>
      <template #b>
        <view-code :code="viewcode9"></view-code>
        <view-code :code="viewcode10"></view-code>
      </template>
    </text-main>

    <text2-head text="transtion-group"></text2-head>
    <text-main>
      <template #a>
        <view11></view11>
      </template>
      <template #b>
        <view-code :code="viewcode11"></view-code>
      </template>
    </text-main>

    <text2-head text="依赖注入provide/inject"></text2-head>
    <text-main>
      <template #a>
        <view12></view12>
      </template>
      <template #b>
        父组件
        <view-code :code="viewcode12"></view-code>
        子组件
        <view-code :code="viewcode12a"></view-code>
        孙组件
        <view-code :code="viewcode12b"></view-code>
      </template>
    </text-main>

    <text2-head text="兄弟组件传参&&Mitt"></text2-head>
    <div><span>npm install mitt -S</span></div>
    <text-main>
      <template #a>
        <view13></view13>
      </template>
      <template #b>
        父组件
        <view-code :code="viewcode13"></view-code>
        子组件A
        <view-code :code="viewcode13a"></view-code>
        子组件B
        <view-code :code="viewcode13b"></view-code>
      </template>
    </text-main>

    <text2-head text="gasp使用"></text2-head>
    <text-main>
       <template #a>
        <view14></view14>
       </template>
       <template #b>
        <view-code :code="viewcode14"></view-code>
       </template>
    </text-main>
  </div>
</template>
<style scoped lang='less'>
#headbox{
  position: relative;
}
</style>