<script setup lang='ts'>
import { ref,isRef,shallowRef,onMounted,inject } from 'vue'
import view2 from '@/views/home/5component/5component-12-2.vue'
const data = inject('color')
onMounted(() => {

})
</script>
<template>
  <div>
    子组件
    <div class="box"></div>
    <view2></view2>
  </div>
</template>
<style scoped lang='less'>

.box{
    width: 50px;
    height: 50px;
    background-color: v-bind(data);
 }
</style>