<script setup lang='ts'>
import { ref } from 'vue'
import 'animate.css'
import gsap from 'gsap';
const flag = ref<boolean>(false)
const beforeenter = (el: Element) => {
  console.log('进入之前')
  gsap.set(el, {
    width: 0,
    height: 0
  })
}
const enter = (el: Element, done: gsap.Callback) => {
  console.log('过度曲线')
  gsap.to(el, {
    width: 200,
    height: 200,
    onComplete: done
  })
}
const afterenter = (el: Element) => {
  console.log('过度完成')
}
const entercancell = (el: Element) => {
  console.log('过渡效果被打段')
}
const beforeleave = (el: Element) => {
  console.log('离开之前')
  gsap.set(el, {
    width: 200,
    height: 200
  })
}
const leave = (el: Element, done: gsap.Callback) => {
  console.log('离开曲线')
  gsap.to(el, {
    width: 0,
    height: 0,
    onComplete: done
  })
}
const afterleave = (el: Element) => {
  console.log('离开完成')
}
const leavecancel = (el: Element) => {
  console.log('过渡效果被打段')
}
const div2 = ref()
//gsap.from是从某某状态恢复到默认状态
//gsap.to是从默认状态变化到某某状态
const move = () => {
  gsap.to(div2.value, {
    width: 0,
    height: 0,
    x:0,
    backgroundColor: 'yellow',
    //将在动画完成时执行的函数
    onComplete: () => {
      gsap.to("#div2", {
        width: 200,
        height: 200,
        x:200,
        duration: 2,
        backgroundColor: 'blue',
      })
    }
  })
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
      @leave-cancelled="leavecancel">
        <div v-if="flag" class="box"></div>
      </transition>
    </div>
    <el-button @click="move">移动</el-button>
    <div class="div2" ref="div2" id="div2"></div>
  </div>
</template>
<style scoped lang='less'>
.div1 {
  width: 200px;
  height: 200px;
  border: 1px solid black;
  display: flex;
  justify-content: center;
  align-items: center;
}

.div2 {
  width: 200px;
  height: 200px;
  border: 1px solid black;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: red;
}

.box {
  width: 200px;
  height: 200px;
  background: url('/public/image/1.jpg') center;
  background-size: cover;
  border-radius: 50%;
}
</style>