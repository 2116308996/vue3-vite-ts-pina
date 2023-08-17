<script setup lang='ts'>
import { provide } from 'vue';
import { ref,isRef,shallowRef,onMounted } from 'vue'
import view1 from '@/views/home/5component/5component-12-1.vue'

const data = ref('red')
const changecolor=(color:string)=>{
    data.value=color
}
provide('color',data)
onMounted(() => {

})
</script>
<template>
  <div>
    父组件
    <button @click="changecolor('red')">红色</button>
    <button @click="changecolor('yellow')">黄色</button>
    <button @click="changecolor('blue')">蓝色</button>
    <div class="box"></div>
    <view1></view1>
  </div>
</template>
<style scoped lang='less'>
 .box{
    width: 50px;
    height: 50px;
    background-color: v-bind(data);
 }
</style>