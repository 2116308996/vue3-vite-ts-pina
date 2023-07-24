<script setup lang='ts'>
const props=defineProps({
    text:{
        type:String,
        default:""
    }
})
</script>
<template>
  <div class="text2" :id="props.text">
      {{ props.text }}
  </div>
</template>
<style scoped>
.text2{
  font-size: 1.65rem;
  font-weight: 600;
  font-family: '微软雅黑';
  color:rgb(96, 98, 102);
  margin-bottom: 20px;
  margin-top: 20px;
}
</style>