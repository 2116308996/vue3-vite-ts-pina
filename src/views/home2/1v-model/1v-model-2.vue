<script setup lang='ts'>
import { ref, isRef, shallowRef, onMounted } from 'vue'
import type { Directive, DirectiveBinding } from 'vue';
import view1 from '@/views/home2/1v-model/1v-model-2-1.vue'
import view2 from '@/views/home2/1v-model/1v-model-2-2.vue'
const { proxy }:any=getCurrentInstance()
const data = ref({

})
let flag = ref<boolean>(true)
const vMove = {
  created() {

  },
  beforeMount(el:HTMLElement,dir:DirectiveBinding) {
      console.log(el,dir)
  },
  mounted(...e: Array<any>) {
    console.log(e)
    e[0].style.background = e[1].value.background
  },
  beforeUpdate() {

  },
  updated() {

  }
}
const vMovess = (...e: any) =>{
    let moveElement = e[0]
//    console.log(moveElement)
    const mouseDown = (el: MouseEvent) => {
      let x = el.clientX - moveElement.offsetLeft
      let y = el.clientY - moveElement.offsetTop
      const move = (es: MouseEvent) => {
        moveElement.style.left = es.clientX-x + 'px'
        moveElement.style.top = es.clientY-y + 'px'
        console.log(es.clientX-x,es.clientY-y,moveElement.style.top)
      }
      document.addEventListener('mousemove', move)
      document.addEventListener('mouseup', () => {
        document.removeEventListener('mousemove', move)
      })
    }
    moveElement.addEventListener('mousedown', mouseDown)
}
const child=ref(null)
const movefun=()=>{
  console.log(proxy)
  proxy?.$refs['child'].movefun()
}
onMounted(() => {

})
</script>
<template>
  <div class="box2">
    <el-button @click="flag = !flag">切换</el-button>
    <el-button @click="movefun">打开拖拽</el-button>
    <view1 v-if="flag" v-move:aaa.bbb="{ background: 'red'}"></view1>
    <view2 ref='child' v-movess></view2>
  </div>
</template>
<style scoped lang='less'>
.box2 {
  width: 100%;
  height: 300px;
}
</style>