<script setup lang='ts'>
import { ref, isRef, shallowRef, onMounted } from 'vue'
import hooks from './hooks6'
const data = ref({
  left:0,
  left2:0
})
const vResize=(el:HTMLElement)=>{
  // let resize=new ResizeObserver((enteries)=>{
  //       console.log(enteries[0].contentRect)
  //   })
  //   resize.observe(el)
  hooks({
    el:el,
    callback:(res:any)=>{
       console.log(res)
    }
  })
}
const goright=()=>{
  var box=document.getElementById('box') as HTMLElement
  var box2=document.getElementById('box2') as HTMLElement
  data.value.left=data.value.left+5
  data.value.left2=data.value.left2+10
  //box.style.left=data.value.left+'px'
  box.style.width=200+data.value.left+'px'
  box2.style.width=200+data.value.left2+'px'
}
onMounted(() => {
  hooks({
    el:document.querySelector('#box') as HTMLElement,
    callback:(res:any)=>{
       console.log(res)
    }
  })
})
</script>
<template>
  <div>
    <p>监听盒子大小变化</p>
    <button @click="goright">移动</button>
    <div id="box"></div>
    <div id="box2" v-resize></div>
  </div>
</template>
<style scoped lang='less'>
#box {
  width: 200px;
  height: 200px;
  background-color: blue;
  position: relative;
  left:0;
}
#box2 {
  width: 200px;
  height: 200px;
  background-color: green;
  position: relative;
  left:0;
}
</style>