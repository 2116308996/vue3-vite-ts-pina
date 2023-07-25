<script setup lang='ts'>
import { ref } from 'vue'
import 'animate.css'
const flag = ref<boolean>(false)
const afterenter=(el:Element)=>{
  console.log('进入之前')
}
const enter=(el:Element,done:Function)=>{
    console.log('过度曲线')
    //2秒后才执行过渡
    // setTimeout(() => {
    //    done() 
    // }, 2000);
}
const beforeenter=(el:Element)=>{
    console.log('过度完成')
}
const entercancell=(el:Element)=>{
    console.log('过渡效果被打段')
}
const beforeleave=(el:Element)=>{
    
}
const leave=(el:Element,done:Function)=>{
    
}
const afterleave=(el:Element)=>{
    
}
const leavecancel=(el:Element)=>{
    
}
</script>
<template>
  <div class="content">
    <button @click="flag = !flag">写轮眼</button>
    <div class="div1">
      <!-- :duration="2000" -->
      <transition
      @before-enter="beforeenter"
      @enter="enter"
      @after-enter="afterenter"
      @enter-cancelled="entercancell"
      @before-leave="beforeleave"
      @leave="leave"
      @after-leave="afterleave"
      @leave-cancelled="leavecancel"
    >
        <div v-if="flag" class="box"></div>
      </transition>
    </div>
  </div>
</template>
<style scoped lang='less'>
.div1{
  width: 200px;
  height: 200px;
  border: 1px solid black;
  display: flex;
  justify-content: center;
  align-items: center;
}
.box {
  width: 200px;
  height: 200px;
  background: url('/public/image/1.jpg') center;
  background-size: cover;
  border-radius: 50%;
}
</style>