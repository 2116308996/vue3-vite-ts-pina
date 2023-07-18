<script setup lang='ts'>
// const props=defineProps({
//     text:{
//         type:String,
//         default:""
//     }
// })
</script>
<template>
  <div class="text1">
    <slot>
      
    </slot>
  </div>
</template>
<style scoped>
.text1{
  font-size: 2.2rem;
  font-weight: 600;
  font-family: '微软雅黑';
  color:rgb(96, 98, 102);
  margin-bottom: 12px;
}
</style>