<script setup lang='ts'>
import { ref,onMounted,inject } from 'vue'
import type {Ref} from 'vue'
const data = inject<Ref<string>>('color')
const changecolor=(color:string)=>{
    data!.value=color
}
onMounted(() => {

})
</script>
<template>
  <div>
    孙组件
    <button @click="changecolor('red')">红色</button>           
    <button @click="changecolor('yellow')">黄色</button>
    <button @click="changecolor('blue')">蓝色</button>
    <div class="box"></div>
  </div>
</template>
<style scoped lang='less'>
.box{
    width: 50px;
    height: 50px;
    background-color: v-bind(data);
 }
</style>