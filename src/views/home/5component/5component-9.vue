<script setup lang='ts'>
import { ref } from 'vue'
import 'animate.css'
const flag = ref<boolean>(false)
</script>
<template>
  <div class="content">
    <button @click="flag = !flag">写轮眼</button>
    <div class="div1">
      <!-- :duration="2000" -->
      <Transition 
      :duration="{enter:1000,leave:2000}"
      leave-active-class="animate__animated animate__rotateOut" 
      enter-active-class="animate__animated animate__rotateIn" 
      name="fade">
        <div v-if="flag" class="box"></div>
      </Transition>
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
.fade-enter-from {
  width: 200px;
  height: 200px;
  transform: rotate(360deg);
}
// .fade-enter-active {
//  animation: all 1.5s ease;
// }
.fade-enter-to {
  width: 200px;
  height: 200px;
}
.fade-leave-from {
  width: 200px;
  height: 200px;
  transform: rotate(360deg);
}
// .fade-leave-active {
//   animation: all 1.5s ease;
// }
.fade-leave-to {
  width: 200px;
  height:200px;
}</style>