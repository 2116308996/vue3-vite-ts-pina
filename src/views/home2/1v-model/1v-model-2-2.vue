<script setup lang='ts'>
import { ref,isRef,shallowRef,onMounted } from 'vue'
const data = ref({

})
const aaaa=ref(null)
onMounted(() => {

})
defineExpose({
  movefun(){
   let a:HTMLElement= document.getElementById('movebox') as HTMLElement
   console.log(a?.style.position)
   if(a?.style.position=='absolute'){
    a.style.position=''
   }else{
    a.style.position='absolute'
   }
  }
})
</script>
<template>
  <div class="box" id="movebox" ref="aaaa">
  </div>
</template>
<style scoped lang='less'>
  .box{
    width: 200px;
    height: 200px;
    background-color: green;
    margin: 5px;
    position: none;
  }
</style>